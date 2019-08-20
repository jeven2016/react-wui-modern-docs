import React, {useCallback, useContext, useRef, useState} from 'react';
import {FloatMenuContext, isFloatMenu, MenuContext} from "./MenuUtils";
import {WindowEventHandler} from "../event";
import PropTypes from "prop-types";
import Menu from "./Menu2";
import useEvent from "../common/UseEvent";

const SubMenu = React.forwardRef((props, ref) => {
      const {isDirectChild, className, extraClassName, ...otherProps} = props;
      const menuCtx = useContext(MenuContext);
      const [activeFloatMenu, setActiveFloatMenu] = useState(false);
      const forwardRef = ref ? ref : useRef(null);

      useEvent("click",(evt)=>{
        if(isDirectChild && isFloatMenu(menuCtx.menuType)){
          closeFloatMenu(evt);
        }
      });

      const handleFloatMenuItem = useCallback(() => {

      }, []);

      const closeFloatMenu = (evt) => {
        // debugger;
        let inside = forwardRef.current.contains(evt.target);
        if (inside) {
          return;
        }
        // if the header is one child of current sub-menu, the menu list cannot be closed
        setActiveFloatMenu(false);
      };

      let clickHeader = (evt) => {
        setActiveFloatMenu(true);
        return false;
      };

      let content = <Menu className={className} extraClassName={extraClassName}
                          ref={forwardRef} {...otherProps}/>;

// create a submenu context for float menu
      if (isDirectChild) {
        console.log(activeFloatMenu);
        let extra = `${extraClassName ? extraClassName + " " : ""}${activeFloatMenu
            ? "active" : null}`;

        return <FloatMenuContext.Provider value={{
          clickFloatMenuItem: handleFloatMenuItem
        }}>

          <Menu ref={forwardRef}
                className={className}
                extraClassName={extra} {...otherProps}
                onClickHeader={clickHeader}>
          </Menu>
        </FloatMenuContext.Provider>;
      }

      return content;
    })
;

SubMenu.defaultProps = {
  className: 'submenu',
  canClose: true, // only for float menu type
  isDirectChild: false //only for internal use
};

SubMenu.propTypes = {
  className: PropTypes.string, //the class name of menu
  isDirectChild: PropTypes.bool //whether this submenu is direct child of a menu and can be folded
};

export default SubMenu;