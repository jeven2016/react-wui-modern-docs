import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import TreeItem from './TreeItem';
import clsx from 'clsx';
import {TreeContext} from '../common/Context';
import useInternalActive from '../common/useInternalActive';
import {convertToArray, isNil} from '../Utils';
import {
  CheckedStatus,
  getNode,
  mergeChildren,
  parseChildren,
  updateChildrenStatus,
  updateParentsStatus,
} from './TreeCommon';
import Loader from '../Loader';

const Tree = React.forwardRef((props, ref) => {
  const {
    showLoading,
    loadJsonData,
    loader,
    jsonData,
    autoCheckLeafs,
    selectMultipleItems,
    expandMultipleItems,
    onlySelectLeaf,
    className,
    extraClassName,
    checkable,
    defaultExpandedItems,
    expandedItems,
    defaultSelectedItems,
    selectedItems,
    defaultCheckedItems,
    checkedItems,
    highlightLine,
    children,

    onSelect,
    onCheck,
    onExpand,
    ...otherProps
  } = props;
  const providedJsonData = props.hasOwnProperty('jsonData');
  const [treeData, setTreeData] = useState(
      () => parseChildren(providedJsonData,
          children, jsonData));

  const [statusMap, setStatusMap] = useState(new Map());
  const [loadingIds, setLoadingIds] = useState([]);

  const clsName = clsx(className, extraClassName);

  const isExternalControl = props.hasOwnProperty('selectedItems');
  const {currentActive: currentSelectedItems, setActive: setSelectedItems} = useInternalActive(
      isExternalControl,
      convertToArray(defaultSelectedItems), convertToArray(selectedItems));

  const isExpendControl = props.hasOwnProperty('expandedItems');
  const {currentActive: currentExpandedItems, setActive: setExpendedItems} = useInternalActive(
      isExpendControl,
      convertToArray(defaultExpandedItems), convertToArray(expandedItems));

  const isCheckControl = props.hasOwnProperty('checkedItems');
  const {currentActive: currentCheckedItems} = useInternalActive(
      isCheckControl,
      convertToArray(defaultCheckedItems), convertToArray(checkedItems));

  const selectHandler = (id, evt) => {
    if (isExternalControl) {
      onSelect && onSelect(id, evt);
    } else if (selectMultipleItems) {
      setSelectedItems(pre => [...pre, id]);
    } else {
      setSelectedItems([id]);
    }
  };

  const isChecked = useCallback((id) => {
    const checkedStatus = statusMap.get(id);
    if (!isNil(checkedStatus)) {
      return checkedStatus === CheckedStatus.checked;
    }
    return false;
  }, [statusMap]);

  const expandHandler = async (id, expand, evt) => {
    if (isExpendControl) {
      onExpand && onExpand(id, expand, evt);
      return;
    }
    if (expand) {
      let parentNode = treeData.treeNodeMap.get(id);
      if (parentNode.isAsyncLoad() && loadJsonData) {
        //Asynchronous loading the data and merge it with the existing json data
        const newIds = [...loadingIds, id];
        // console.log(newIds)
        setLoadingIds(newIds);

        const data = await loadJsonData(id, evt);
        setLoadingIds(prevState => [...prevState.filter(val => val !== id)]);//clear loading status
        const newJsonData = {...jsonData};

        mergeChildren(newJsonData, data, id);

        const newTreeData = parseChildren(true, children, newJsonData);
        setTreeData(newTreeData);

        if (isChecked(id)) {
          //if parent node is checked all children should be checked as well
          let itemStatusMap = new Map(statusMap);
          parentNode = newTreeData.treeNodeMap.get(id);
          updateChildrenStatus(itemStatusMap, parentNode,
              CheckedStatus.checked);
          setStatusMap(itemStatusMap);
        }
      }

      if (expandMultipleItems) {
        setExpendedItems([...currentExpandedItems, id]);
      } else {
        setExpendedItems([id]);
      }
      return;
    }
    //remove the id if the item is collapsed
    setExpendedItems([
      ...currentExpandedItems.filter(elem => elem !== id)]);
  };

  const checkHandler = useCallback((id, checked, evt) => {
    console.log('click handler.....');
    let node = treeData.treeNodeMap.get(id);
    if (isNil(node)) {
      throw new Error('No node exists with this id \'' + id + '\'.');
    }

    let itemStatusMap = new Map(statusMap);

    //add this node into map
    itemStatusMap.set(id,
        checked ? CheckedStatus.checked : CheckedStatus.unchecked);

    let parent = node.getParent();
    if (isNil(parent)) {
      return;
    }

    updateParentsStatus(itemStatusMap, parent,
        checked ? CheckedStatus.checked :
            CheckedStatus.unchecked);

    //check or uncheck all leaf nodes if the parent has
    if (node.hasChildren() && autoCheckLeafs) {
      updateChildrenStatus(itemStatusMap, node,
          checked ? CheckedStatus.checked : CheckedStatus.unchecked);
    }

    setStatusMap(itemStatusMap);
  }, [treeData, statusMap]);

  return <TreeContext.Provider value={{
    showLoading,
    loadJsonData,
    loader,
    loadingIds,
    statusMap,
    treeData,
    onlySelectLeaf,
    checkable,
    selectedItems: currentSelectedItems,
    expandedItems: currentExpandedItems,
    checkedItems: currentCheckedItems,
    selectItem: selectHandler,
    expandItem: expandHandler,
    checkItem: checkHandler,
    highlightLine,
  }}>
    <div className={clsName} {...otherProps} ref={ref}>
      {providedJsonData ? getNode(treeData) : children}
    </div>
  </TreeContext.Provider>;
});

Tree.defaultProps = {
  showLoading: true,
  loader: <Loader type="primary" size="small" active/>,
  selectMultipleItems: false,
  expandMultipleItems: true,
  onlySelectLeaf: true,
  className: 'tree',
  checkable: false,
  defaultExpandedItems: [],
  defaultSelectedItems: [],
  defaultCheckedItems: [],
  highlightLine: false, //this parameter means whether to highlight the whole line while the item is selected
  autoCheckLeafs: true, //whether to automatically check the leafs while the parent node is checked
};

Tree.propTypes = {
  onSelect: PropTypes.func,
  onCheck: PropTypes.func,
  onExpand: PropTypes.func,
  loadJsonData: PropTypes.func,
};

Tree.TreeItem = TreeItem;

export default Tree;