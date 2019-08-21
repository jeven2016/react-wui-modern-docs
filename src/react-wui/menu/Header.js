import React, {useContext} from 'react';
import {MenuContext} from "./MenuUtils";
import PropTypes from "prop-types";
import clsx from "clsx";

/**
 * Menu Header
 */
const Header = React.forwardRef((props, ref) => {
  const menuCtx = useContext(MenuContext);
  const {id, onClick,className, extraClassName, children, paddingLeft} = props;

  let clsName = clsx(extraClassName, className);

  return <li className={clsName}
             ref={ref}
             key={id}
             onClick={(evt) => onClick({id: props.id}, evt)}
             style={{paddingLeft: paddingLeft}}>
    {children}
  </li>;
});

Header.defaultProps = {
  className: 'menu-header'
};

Header.propTypes = {
  className: PropTypes.string, //the class name of Header
};

export default Header;