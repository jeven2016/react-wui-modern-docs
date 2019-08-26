import React, {useContext} from 'react';
import {MenuContext} from "./MenuUtils";
import PropTypes from "prop-types";
import clsx from "clsx";
import {isNil} from "lodash";

/**
 * Menu Header
 */
const Header = React.forwardRef((props, ref) => {
  const menuCtx = useContext(MenuContext);
  const {disabled, id, onClick, className, extraClassName, children, paddingLeft} = props;
  const disabledHeader = isNil(disabled) ? menuCtx.menuDisabled : disabled;

  let clsName = clsx(extraClassName, className, {disabled: disabledHeader});

  return <li className={clsName}
             ref={ref}
             key={id}
             onClick={(evt) => {
               if (disabledHeader) {
                 return;
               }
               return onClick({id: props.id}, evt);
             }}
             style={{paddingLeft: paddingLeft}}>
    {children}
  </li>;
});

Header.defaultProps = {
  disabled: null,
  className: 'menu-header'
};

Header.propTypes = {
  disabled: PropTypes.bool, //disable this Menu
  className: PropTypes.string, //the class name of Header
};

export default Header;