import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import NormalMenu, {BaseMenu} from './NormalMenu';
import {MenuContext, SubMenuContext} from './MenuUtils';
import {isNil} from '../Utils';
import {isDisabledMenu} from './BaseMenu';

/**
 * SubMenu Component
 */
const SubMenu = React.forwardRef((props, ref) => {
  const {disabled, ...otherProps} = props;
  const menuCtx = useContext(MenuContext);
  const parenSubMenuCtx = useContext(SubMenuContext);

  //disable menu from three levels
  const menuDisabled = menuCtx.menuDisabled;
  const parentSubMenuDisabled = parenSubMenuCtx.subMenuDisabled;

  let isDisabled = isDisabledMenu(disabled, parentSubMenuDisabled,
      menuDisabled);

  return <SubMenuContext.Provider value={{subMenuDisabled: isDisabled}}>
    <NormalMenu {...otherProps} passContext={false}/>
  </SubMenuContext.Provider>;
});

SubMenu.defaultProps = {
  disabled: null, //means unset
  className: 'normal submenu',
};

SubMenu.propTypes = {
  disabled: PropTypes.bool, //disable this Menu
  className: PropTypes.string, //the class name of menu
  id: PropTypes.string,
};

export default SubMenu;