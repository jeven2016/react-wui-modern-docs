import React, {useEffect, useRef, useState} from 'react';
import {MenuContext, passHeaderHandler, setPadding} from './MenuUtils';
import {isNil} from 'lodash';
import clsx from 'clsx';
import {openMenuType} from '../common/Constants';
import {isDefaultOpen, useMenuList} from './BaseMenu';

export const BaseMenu = React.forwardRef((props, ref) => {
  const {
    id,
    extraClassName,
    children,
    type,
    onClickItem,
    onClickHeader,
    onSelect,
    className,
    hasBorder,
    hasBox,
    hasBackground,
    disabled,
    block,
    selectable,
    multiSelect,
    autoSelectItem,
    setItemPaddingLeft,
    paddingLeftUnit,
    paddingLeftIncrement,
    defaultActiveItems,
    defaultOpenedMenus,

    subMenuContext,//internal usage
    passContext,//internal usage
    ...otherProps
  } = props;

  const menuRef = !isNil(ref) ? ref : useRef(null);

  //set padding-left property to items, only execute once
  useEffect(() => {
    //set padding-left property to child nodes
    setPadding(props, menuRef.current, 0);
  }, []);

  const defaultOpen = () => isDefaultOpen(defaultOpenedMenus, id);

  const {showMenuList, handleHeader} = useMenuList(props, disabled,
      defaultOpen);

  //if no id is assigned , the value field would be used as identifier
  const [activeItems, setActiveItems] = useState([]);

  let isShow = showMenuList.manualChang ? showMenuList.show
      : defaultOpen();

  // handle item
  const handleItem = (itemInfo, evt) => {
    const itemId = isNil(itemInfo.id) ? itemInfo.value : itemInfo.id;
    let autoActiveItem = true;
    let callback = onClickItem;
    if (!isNil(callback)) {
      autoActiveItem = callback(itemInfo, evt);
    }

    if (!selectable || !autoSelectItem) {
      return false;
    }

    if (isNil(autoActiveItem) || autoActiveItem) {
      let selectItems = [];
      //multiSelect
      if (multiSelect) {
        if (activeItems.includes(itemId)) {
          //deselect this item
          selectItems = activeItems.filter(
              existingItem => itemId !== existingItem);
        } else {
          //select this item
          selectItems = activeItems.concat(itemId);
        }
      } else {
        //for single selection
        selectItems = [itemId];
      }
      setActiveItems(items => selectItems);
      console.log(selectItems);

      //callback
      onSelect && onSelect(selectItems);
    }
    return autoActiveItem;
  };

  let clsName = clsx(extraClassName, className, {
    'global-with-border': hasBorder,
    'global-with-box': hasBox,
    'with-bg': hasBackground,
    [type]: type,
    block,
    close: !isShow,
    show: isShow,
    disabled: disabled,
  });

  const content = <ul className={clsName} ref={menuRef} {...otherProps}>
    {children}
  </ul>;

  if (passContext) {
    return <MenuContext.Provider
        value={{
          disabled: disabled,
          clickHeader: handleHeader,
          clickItem: handleItem,
          activeItems: activeItems,
          menuDisabled: disabled,
          defaultOpenedMenus: defaultOpenedMenus,
          menuType: type,
        }}>
      {content}
    </MenuContext.Provider>;
  }
  return content;

});

const NormalMenu = React.forwardRef(((props, ref) => {
  return <BaseMenu ref={ref} {...props}/>;
}));

NormalMenu.defaultProps = {
  className: 'normal menu',
  hasBorder: false,
  hasBox: false,
  hasBackground: false,
  disabled: null,
  block: false,
  selectable: true,
  multiSelect: false,
  autoSelectItem: true,
  setItemPaddingLeft: true,
  paddingLeftUnit: 'rem',
  paddingLeftIncrement: 1,
  defaultActiveItems: [],
  defaultOpenedMenus: openMenuType.all,
  subMenuContext: true,
  passContext: true,
};

export default NormalMenu;