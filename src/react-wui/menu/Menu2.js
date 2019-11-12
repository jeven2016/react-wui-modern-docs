import React, {useEffect, useRef, useState} from 'react';
import {
  isFloatMenu,
  MenuContext,
  passHeaderHandler,
  setPadding,
} from './MenuUtils';
import SubMenu from './SubMenu';
import Header from './Header';
import List from './List';
import Item from './Item';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {isNil} from '../Utils';
import {isDefaultOpen, useMenuList} from './BaseMenu';
import {openMenuType} from '../common/Constants';

const MenuDirection = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};

/**
 * Menu Component
 */
const Menu2 = React.forwardRef((props, ref) => {
  const {
    block, className, extraClassName, hasBorder, children,
    disabled,
    type,
    id,
    selectable = true,
    autoSelectItem = true,
    onClickHeader,
    multiMenu = false,
    appendMultiMenuClass = true,
    menuDirection = MenuDirection.vertical, // horizontal, vertical
    onClickItem,
    activeItems = [],
    defaultOpenedMenus,
    open,
    setItemPaddingLeft,
    paddingLeftUnit,
    paddingLeftIncrement,
    autoCloseFloatSubMenu,
    hasBox,
    hasBackground,
    appendClass,
    ...otherProps
  } = props;

  //for menu of multi levels, collapse all submenus by default
  const internalDefaultOpenMenus = multiMenu &&
  (defaultOpenedMenus === openMenuType.all) ? [] : defaultOpenedMenus;

  const defaultOpen = () => isDefaultOpen(internalDefaultOpenMenus, id);

  const [activeItemId, setActiveItemId] = useState(null); //if no id is assigned , the value field would be used as identifier
  const {showMenuList, handleHeader} = useMenuList(props, disabled,
      defaultOpen);

  //set padding-left property to items, only execute once
  useEffect(() => {
    //set padding-left property to child nodes
    setPadding(props, menuRef.current, 0);
  }, []);

  let directionClsName;
  if (multiMenu) {
    directionClsName = menuDirection === MenuDirection.horizontal
        ? 'menu-row'
        : 'menu-column';

  } else {
    directionClsName = 'normal';
  }

  let isShow = showMenuList.manualChang ? showMenuList.show
      : defaultOpen();

  let clsName = clsx(extraClassName, className, directionClsName, {
    'global-with-border': hasBorder,
    'with-box': hasBox,
    'with-bg': hasBackground,
    'popup-menu': multiMenu && appendMultiMenuClass,
    [type]: type,
    block,
    'close': !isShow,
    show: isShow,
    disabled: disabled,
  });

  // handle item
  const handleItem = (itemInfo, evt) => {
    const itemId = isNil(itemInfo.id) ? itemInfo.value : itemInfo.id;
    let autoActiveItem = true;
    let callback = props.onClickItem;
    if (!isNil(callback)) {
      autoActiveItem = callback(itemInfo, evt);
    }

    if (!selectable || !autoSelectItem) {
      return false;
    }

    if (isNil(autoActiveItem) || autoActiveItem) {
      setActiveItemId(itemId);
    }
    return autoActiveItem;
  };

  const handleFloatMenu = (menuChildren) => {
    if (!multiMenu) {
      return menuChildren;
    }
    //set direct child flag for submenus if the menu's type if float
    return React.Children.map(menuChildren, (child) => {
      if (child.type === SubMenu && multiMenu) {
        return React.cloneElement(child, {
          isDirectChild: true,
        });
      }
      return child;
    });
  };

  // let updatedChildren = updateChildren(children, type);
  const menuRef = !isNil(ref) ? ref : useRef(null);

  return (
      <MenuContext.Provider
          value={{
            multiMenu: multiMenu,
            disabled: disabled,
            activeItems: activeItems,
            activeItemId: activeItemId,
            clickItem: handleItem,
            defaultOpenedMenus: defaultOpenedMenus,
            menuType: type,
            menuDisabled: disabled,
            autoCloseFloatSubMenu: autoCloseFloatSubMenu,
          }}>
        <ul className={clsName} ref={menuRef} {...otherProps}>
          {handleFloatMenu(passHeaderHandler(children, handleHeader))}
        </ul>
      </MenuContext.Provider>
  );

});
Menu.Header = Header;
Menu.List = List;
Menu.SubMenu = SubMenu;
Menu.Item = Item;

Menu.defaultProps = {
  defaultOpenedMenus: openMenuType.all,
  className: 'menu',
  disabled: false,
  hasBorder: false,
  hasBox: false,
  hasBackground: false,
  activeItems: [],
  setItemPaddingLeft: true,
  paddingLeftUnit: 'rem',
  paddingLeftIncrement: 1,
  autoCloseFloatSubMenu: true, //automatically close the float menu after clicked the item
  onClickItem: null,
  onClickHeader: null,
  type: null, //primary, dark, float
};
Menu.propTypes = {
  id: PropTypes.string, //menu id
  className: PropTypes.string, //the class name of menu
  disabled: PropTypes.bool, //disable this Menu
  hasBorder: PropTypes.bool, //make the menu show borders
  hasBox: PropTypes.bool, //make the menu show a box
  hasBackground: PropTypes.bool, // show a background for menu
  activeItems: PropTypes.array, //the id of a item that is currently selected, you can pass the values if no id is specified
  setItemPaddingLeft: PropTypes.bool,
  defaultOpenedMenus: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string]), // an array includes the menu id should open by default, default value is ["all"]
  onClickItem: PropTypes.func, // a callback triggered by clicking a item
  onClickHeader: PropTypes.func, // a callback triggered by clicking a header
  type: PropTypes.oneOf(['primary', 'dark', 'float']), // menu type
  // type: PropTypes.arrayOf(["primary", "dark", "float"]) // menu type
};

export default Menu2;