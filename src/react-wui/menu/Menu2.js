import React, {useEffect, useRef, useState} from 'react';
import {MenuContext} from '../Utils';
import SubMenu from './SubMenu';
import Header from './Header';
import List from './List';
import Item from './Item';
import {MenuType} from '../common/Constants';
import PropTypes from 'prop-types';
import clsx from "clsx";
import {setPadding} from "./MenuUtils";

const Menu = React.forwardRef((props, ref) => {
  const [menuState, setMenuState] = useState({
    clickedItem: null,
    showMenuList: true,
  });

  useEffect(() => {
    //set padding-left property to child nodes
    setPadding(menuRef.current, 0);
  });

  const {
    block, className, extraClassName, hasBorder, children,
    disabled,
    type,
    onClickHeader,
    onClickItem,
    activeItem,
    canClose,
    openMenu,
    setItemPaddingLeft,
    paddingLeftUnit,
    paddingLeftIncrement,
    autoCloseFloatSubMenu,
    hasBox,
    hasBackground,
    appendClass,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className, {
    'clear-border': !hasBorder,
    'with-box': hasBox,
    'with-bg': hasBackground,
    [type]: type,
    block,
    'close': !menuState.showMenuList,
  });

  const updateChildren = (children) => {
    const {type} = props;
    let chd = React.Children.map(children, child => {
      //pass the click handler to header
      if (child.type === Header) {
        return React.cloneElement(child, {
          clickHeader: this.handleHeader,
        });
      }
      return child;
    });

    if (type === MenuType.float) {
      chd = React.Children.map(children, child => {
        //mark this menu is SubMenu (in top level) and can be folded
        if (child.type === SubMenu) {
          return React.cloneElement(child, {
            isTopSubMenu: true,
          });
        }
        return child;
      });
    }

    return chd;
  };

  // let updatedChildren = updateChildren(children, type);
  const menuRef = ref ? ref : useRef(null);

  return (
      <MenuContext.Provider
          value={{
            // activeItem: this.getCurrentActiveIem(),
            // clickItem: this.handleItem,
            openMenu: openMenu,
            menuType: type,
            menuDisabled: disabled,
            autoCloseFloatSubMenu: autoCloseFloatSubMenu,
          }}>
        <ul className={clsName} ref={menuRef} {...otherProps}>
          {children}
        </ul>
      </MenuContext.Provider>
  );

});
Menu.Header = Header;
Menu.List = List;
Menu.SubMenu = SubMenu;
Menu.Item = Item;

Menu.defaultProps = {
  className: 'menu',
  disabled: false,
  hasBorder: true,
  hasBox: false,
  hasBackground: false,
  activeItem: null,
  setItemPaddingLeft: true,
  paddingLeftUnit: 'rem',
  paddingLeftIncrement: 1,
  canClose: true, // only for float menu type
  autoCloseFloatSubMenu: true, //automatically close the float menu after clicked the item
  openMenu: ['all'], // menu id array or 'all'
  onClickItem: null,
  onClickHeader: null,
  type: null, //primary, dark, float
};
Menu.propTypes = {
  className: PropTypes.string, //the class name of menu
  disabled: PropTypes.bool, //disable this Menu
  hasBorder: PropTypes.bool, //make the menu show borders
  hasBox: PropTypes.bool, //make the menu show a box
  hasBackground: PropTypes.bool, // show a background for menu
  activeItem: PropTypes.string, //the id of a item that is currently selected
  openMenu: PropTypes.array, // an array includes the menu id should open by default, default value is ["all"]
  onClickItem: PropTypes.func, // a callback triggered by clicking a item
  onClickHeader: PropTypes.func, // a callback triggered by clicking a header
  type: PropTypes.oneOf(['primary', 'dark', 'float']), // menu type
  // type: PropTypes.arrayOf(["primary", "dark", "float"]) // menu type
};

export default Menu;