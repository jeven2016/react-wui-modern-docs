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

/**
 * Menu Component
 */
const Menu = React.forwardRef((props, ref) => {
  const {
    block, className, extraClassName, hasBorder, children,
    disabled,
    type,
    id,
    selectable = true,
    onClickHeader,
    onClickItem,
    activeItems,
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

  const defaultOpen = () => isDefaultOpen(defaultOpenedMenus, id);

  const [activeItemId, setActiveItemId] = useState();
  const {showMenuList, handleHeader} = useMenuList(props, disabled,
      defaultOpen);

  //set padding-left property to items, only execute once
  useEffect(() => {
    //set padding-left property to child nodes
    setPadding(props, menuRef.current, 0);
  }, []);

  let clsName = clsx(extraClassName, className, {
    'with-border': hasBorder,
    'with-box': hasBox,
    'with-bg': hasBackground,
    [type]: type,
    block,
    'close': showMenuList.manualChang ? !showMenuList.show
        : !defaultOpen(),
    disabled: disabled,
  });

  // handle item
  const handleItem = (itemInfo, evt) => {
    const itemId = itemInfo.id;
    let autoActiveItem = true;
    let callback = props.onClickItem;
    if (!isNil(callback)) {
      autoActiveItem = callback(itemInfo, evt);
    }

    if (!selectable) {
      return false;
    }

    if (isNil(autoActiveItem) || autoActiveItem) {
      setActiveItemId(itemId);
    }
    return autoActiveItem;
  };

  const handleFloatMenu = (menuChildren) => {
    //set direct child flag for submenus if the menu's type if float
    return React.Children.map(menuChildren, (child) => {
      if (child.type === SubMenu && isFloatMenu(type)) {
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
            disabled: disabled,
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
  closable: true,
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
  activeItems: PropTypes.array, //the id of a item that is currently selected
  setItemPaddingLeft: PropTypes.bool,
  defaultOpenedMenus: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string]), // an array includes the menu id should open by default, default value is ["all"]
  closable: PropTypes.bool, //whether this menu is closable
  onClickItem: PropTypes.func, // a callback triggered by clicking a item
  onClickHeader: PropTypes.func, // a callback triggered by clicking a header
  type: PropTypes.oneOf(['primary', 'dark', 'float']), // menu type
  // type: PropTypes.arrayOf(["primary", "dark", "float"]) // menu type
};

export default Menu;