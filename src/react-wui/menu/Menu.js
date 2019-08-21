import React, {useEffect, useRef, useState} from 'react';
import {MenuContext, passHeaderHandler, setPadding} from "./MenuUtils";
import SubMenu from './SubMenu';
import Header from './Header';
import List from './List';
import Item from './Item';
import PropTypes from 'prop-types';
import clsx from "clsx";
import {isNil} from "../Utils";
import useMenuList from "./BaseMenu";

const Menu = React.forwardRef((props, ref) => {
  const [activeItemId, setActiveItemId] = useState();
  const {showMenuList, handleHeader} = useMenuList(props);

  //set padding-left property to items, only execute once
  useEffect(() => {
    //set padding-left property to child nodes
    setPadding(props, menuRef.current, 0);
  }, []);

  const {
    block, className, extraClassName, hasBorder, children,
    disabled,
    type,
    onClickHeader,
    onClickItem,
    activeItems,
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
    'close': !showMenuList,
  });

  // handle item
  const handleItem = (itemInfo, evt) => {
    const id = itemInfo.id;
    setActiveItemId(id);

    let callback = props.onClickItem;
    return !isNil(callback) ? callback(itemInfo, evt) : null;
  };

  // let updatedChildren = updateChildren(children, type);
  const menuRef = !isNil(ref) ? ref : useRef(null);

  return (
      <MenuContext.Provider
          value={{
            activeItemId: activeItemId,
            clickItem: handleItem,
            openMenu: openMenu,
            menuType: type,
            menuDisabled: disabled,
            autoCloseFloatSubMenu: autoCloseFloatSubMenu,
          }}>
        <ul className={clsName} ref={menuRef} {...otherProps}>
          {passHeaderHandler(children, handleHeader)}
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
  activeItems: [],
  setItemPaddingLeft: true,
  paddingLeftUnit: 'rem',
  paddingLeftIncrement: 1,
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
  activeItems: PropTypes.array, //the id of a item that is currently selected
  setItemPaddingLeft: PropTypes.bool,
  openMenu: PropTypes.array, // an array includes the menu id should open by default, default value is ["all"]
  onClickItem: PropTypes.func, // a callback triggered by clicking a item
  onClickHeader: PropTypes.func, // a callback triggered by clicking a header
  type: PropTypes.oneOf(['primary', 'dark', 'float']), // menu type
  // type: PropTypes.arrayOf(["primary", "dark", "float"]) // menu type
};

export default Menu;