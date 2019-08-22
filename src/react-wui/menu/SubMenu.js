import React, {useCallback, useContext, useRef, useState} from 'react';
import {
  FloatMenuContext,
  isFloatMenu,
  MenuContext,
  passHeaderHandler
} from "./MenuUtils";
import PropTypes from "prop-types";
import Menu from "./Menu";
import useEvent from "../common/UseEvent";
import {isNil} from "../Utils";
import {EventListener} from "../common/Constants";
import clsx from "clsx";
import useMenuList from "./BaseMenu";

/**
 * SubMenu Component
 */
const SubMenu = React.forwardRef((props, ref) => {
  const {
    setItemPaddingLeft,
    isDirectChild,
    disabled,
    className,
    extraClassName,
    children,
    ...otherProps
  } = props;
  const menuCtx = useContext(MenuContext);
  const [activeFloatMenu, setActiveFloatMenu] = useState(false);
  const {showMenuList, handleHeader} = useMenuList(props); //used to collapse or expand the menu list
  const forwardRef = ref ? ref : useRef(null);
  const isFloatSubmenu = isDirectChild && isFloatMenu(menuCtx.menuType);

  //add a window event listener to close the popup submenu if this submenu is
  //a direct child of menu
  useEvent(EventListener.click, (evt) => {
    if (isFloatSubmenu) {
      let inside = forwardRef.current.contains(evt.target);
      if (inside) {
        return;
      }
      // if the header is one child of current sub-menu, the menu list cannot be closed
      setActiveFloatMenu(false);
    }
  }, isFloatSubmenu);

  //auto close the popup menu while the item is clicked
  const handleFloatMenuItem = useCallback((itemInfo, evt) => {
    const close = menuCtx.clickItem(itemInfo, evt);
    if (!menuCtx.autoCloseFloatSubMenu) {
      return;
    }

    if (isNil(close) || close) {
      setActiveFloatMenu(val => !val);
    }
  }, []);

  //click handler of header
  let clickHeader = (headerInfo, evt) => {
    if (disabled) {
      return;
    }
    if (isFloatSubmenu) {
      setActiveFloatMenu(true);
      //prevent the default behaviour that the menu component provides
      //(in order not to collapse or expand the menu list)
      return false;
    }
    if (!isFloatMenu(menuCtx.menuType)) {
      handleHeader(headerInfo, evt);
    }
  };

  // for submenu is direct child of a menu
  if (isDirectChild) {
    let extra = `${extraClassName ? extraClassName : ""}${activeFloatMenu
        ? "active" : ""}`;

    return <FloatMenuContext.Provider value={{
      clickFloatMenuItem: handleFloatMenuItem
    }}>
      <Menu ref={forwardRef}
            type="float"
            disabled={disabled}
            className={className}
            setItemPaddingLeft={setItemPaddingLeft}
            extraClassName={extra} {...otherProps}
            onClickHeader={clickHeader}>
        {passHeaderHandler(children, clickHeader)}
      </Menu>
    </FloatMenuContext.Provider>;
  } else {
    //for simple submenu
    let simpleClsName = clsx(extraClassName, className, {
      'close': !showMenuList,
      disabled: disabled
    });

    return <ul className={simpleClsName}
               ref={forwardRef} {...otherProps}>
      {passHeaderHandler(children, clickHeader)}
    </ul>;
  }
});

SubMenu.defaultProps = {
  disabled: false,
  className: 'submenu',
  setItemPaddingLeft: true,
  isDirectChild: false //only for internal use
};

SubMenu.propTypes = {
  disabled: PropTypes.bool, //disable this Menu
  className: PropTypes.string, //the class name of menu
  setItemPaddingLeft: PropTypes.bool,
  isDirectChild: PropTypes.bool //whether this submenu is direct child of a menu and can be folded
};

export default SubMenu;