import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  FloatMenuContext,
  isFloatMenu,
  MenuContext,
  passHeaderHandler,
  setPadding
} from "./MenuUtils";
import PropTypes from "prop-types";
import Menu from "./Menu";
import useEvent from "../common/UseEvent";
import {isNil} from "../Utils";
import {EventListener} from "../common/Constants";
import clsx from "clsx";
import useMenuList from "./BaseMenu";

const SubMenu = React.forwardRef((props, ref) => {
  const {
    setItemPaddingLeft,
    isDirectChild,
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

  //set padding-left property to items, only execute once
  useEffect(() => {
    //set padding-left property to child nodes
    setPadding(props, forwardRef.current, 0);
  }, []);

  //add a window event listener to close the popup submenu
  useEvent(EventListener.click, (evt) => {
    if (isFloatSubmenu) {
      closeFloatMenu(evt);
    }
  }, isFloatSubmenu);

  const handleFloatMenuItem = useCallback((itemInfo, evt) => {
    const close = menuCtx.clickItem(itemInfo, evt);
    if (!menuCtx.autoCloseFloatSubMenu) {
      return;
    }

    if (isNil(close) || close) {
      setActiveFloatMenu(val => !val);
    }
  }, []);

  const closeFloatMenu = (evt) => {
    let inside = forwardRef.current.contains(evt.target);
    if (inside) {
      return;
    }
    // if the header is one child of current sub-menu, the menu list cannot be closed
    setActiveFloatMenu(false);
  };

  //click handler of header
  let clickHeader = (headerInfo, evt) => {
    if (isFloatSubmenu) {
      setActiveFloatMenu(true);
      //prevent the default behaviour that the menu component provides
      //(in order not to collapse or expand the menu list)
      return false;
    }
  };

  //for simple submenu
  let simpleClsName = clsx(extraClassName, className, {
    'close': !showMenuList
  });
  let content = <ul className={simpleClsName}
                    ref={forwardRef} {...otherProps}>
    {passHeaderHandler(children, clickHeader)}
  </ul>;

  // for float menu
  if (isDirectChild) {
    let extra = `${extraClassName ? extraClassName : ""}${activeFloatMenu
        ? "active" : null}`;

    return <FloatMenuContext.Provider value={{
      clickFloatMenuItem: handleFloatMenuItem
    }}>
      <Menu ref={forwardRef}
            className={className}
            setItemPaddingLeft={setItemPaddingLeft}
            extraClassName={extra} {...otherProps}
            onClickHeader={clickHeader}>
        {passHeaderHandler(children, clickHeader)}
      </Menu>
    </FloatMenuContext.Provider>;
  }
  return content;
});

SubMenu.defaultProps = {
  className: 'submenu',
  setItemPaddingLeft:true,
  isDirectChild: false //only for internal use
};

SubMenu.propTypes = {
  className: PropTypes.string, //the class name of menu
  setItemPaddingLeft: PropTypes.bool,
  isDirectChild: PropTypes.bool //whether this submenu is direct child of a menu and can be folded
};

export default SubMenu;