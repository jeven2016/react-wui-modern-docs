import React, {useCallback, useContext, useRef, useState} from 'react';
import {
  FloatMenuContext,
  isFloatMenu,
  MenuContext,
  passHeaderHandler,
} from './MenuUtils';
import PropTypes from 'prop-types';
import Menu from './Menu';
import useEvent from '../common/UseEvent';
import {isNil} from '../Utils';
import {EventListener} from '../common/Constants';
import clsx from 'clsx';
import {isDefaultOpen, isDisabled, useMenuList} from './BaseMenu';

/**
 * SubMenu Component
 */
const SubMenu = React.forwardRef((props, ref) => {
  const {
    id,
    setItemPaddingLeft,
    isDirectChild,
    disabled,
    className,
    extraClassName,
    children,
    ...otherProps
  } = props;

  const menuCtx = useContext(MenuContext);
  let currentDisabled = isDisabled(menuCtx.menuDisabled, disabled);
  const [activeFloatMenu, setActiveFloatMenu] = useState(false);

  //get the initial status of this menu
  const defaultOpen = () => isDefaultOpen(menuCtx.defaultOpenedMenus, id);

  //used to collapse or expand the menu list
  const {showMenuList, handleHeader} = useMenuList(props, currentDisabled,
      defaultOpen);
  const forwardRef = ref ? ref : useRef(null);

  //check this submenu is float type
  const isFloatSubmenu = isDirectChild;

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
    if (currentDisabled) {
      return;
    }
    if (isFloatSubmenu) {
      setActiveFloatMenu(true);
      //prevent the default behaviour that the menu component provides
      //(in order not to collapse or expand the menu list)
      return false;
    }

    //for simple submenu
    if (!isFloatMenu(menuCtx.menuType)) {
      handleHeader(headerInfo, evt);
    }
  };

  let directClsName = 'normal';

  if (menuCtx.multiMenu) {
    directClsName = isDirectChild ? 'direct-child' : 'non-direct-child';
  }

  // for submenu is direct child of a menu
  if (isDirectChild) {
    /* let extra = `${extraClassName ? extraClassName : ''}${activeFloatMenu
         ? 'show' : 'close'} ${directClsName}`;*/

    return <FloatMenuContext.Provider value={{
      clickFloatMenuItem: handleFloatMenuItem,
    }}>
      <Menu ref={forwardRef}
            multiMenu
            appendMultiMenuClass={false}
            disabled={currentDisabled}
            className={className}
            setItemPaddingLeft={setItemPaddingLeft}
            extraClassName={directClsName}
            {...otherProps}
            onClickHeader={clickHeader}>
        {passHeaderHandler(children, clickHeader)}
      </Menu>
    </FloatMenuContext.Provider>;
  } else {
    //for simple submenu
    let show = showMenuList.manualChang ? showMenuList.show
        : defaultOpen();
    let simpleClsName = clsx(extraClassName, className, directClsName, {
      'close': !show,
      show: show,
      disabled: currentDisabled,
    });

    return <MenuContext.Provider
        value={{...menuCtx, menuDisabled: currentDisabled}}>
      <ul className={simpleClsName}
          ref={forwardRef} {...otherProps}>
        {passHeaderHandler(children, handleHeader)}
      </ul>
    </MenuContext.Provider>;
  }
});

SubMenu.defaultProps = {
  disabled: false,
  className: 'submenu',
  setItemPaddingLeft: true,
  isDirectChild: false, //only for internal use
};

SubMenu.propTypes = {
  disabled: PropTypes.bool, //disable this Menu
  className: PropTypes.string, //the class name of menu
  setItemPaddingLeft: PropTypes.bool,
  id: PropTypes.string,
  isDirectChild: PropTypes.bool, //whether this submenu is direct child of a menu and can be folded
};

export default SubMenu;