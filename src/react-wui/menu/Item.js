import React, {useContext} from 'react';
import {isNil} from '../Utils';
import {FloatMenuContext, MenuContext} from "./MenuUtils";
import PropTypes from 'prop-types';
import clsx from "clsx";

const Item = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,
    active,
    align,
    hasBottomBar,
    hasBox,
    disabled,
    children,
    paddingLeft,
    id,
    hasBackground,
    value,
    text,
    ...otherProps
  } = props;

  const menuCtx = useContext(MenuContext);
  const floatMenuCtx = useContext(FloatMenuContext);
  const disabledItem = isNil(disabled) ? menuCtx.menuDisabled : disabled;

  const clsName = clsx(extraClassName, className, {
    [align]: align,
    'with-box': hasBox,
    'with-bg': hasBackground,
    'with-bottom-bar': hasBottomBar,
    active: menuCtx.activeItemId === props.id,
    disabled: disabledItem
  });

  const onClick = (evt) => {
    if (!menuCtx.autoCloseFloatSubMenu || disabledItem) {
      return;
    }
    const itemInfo = {
      id: props.id,
      value: props.value,
      text: !isNil(props.text) ? props.text : props.children,
    };
    if (!menuCtx.clickItem) {
      return;
    }
    let closeMenu = menuCtx.clickItem(itemInfo, evt);

    if (floatMenuCtx.clickFloatMenuItem) {
      floatMenuCtx.clickFloatMenuItem(props.id, closeMenu, evt);
    }
  };

  return <li className={clsName}
             style={{paddingLeft: paddingLeft}}
             onClick={(evt) => onClick(evt)}
             {...otherProps}>
    {!isNil(text) ? text : children}
  </li>
});

Item.defaultProps = {
  className: 'menu-item',
  hasBox: false,
  hasBackground: false,
  hasBottomBar: false,
  disabled: null,
  align: null, //left or right
};
Item.propsType = {
  className: PropTypes.string,
  hasBottomBar: PropTypes.bool,
  hasBox: PropTypes.bool, //make the item show a box
  hasBackground: PropTypes.bool, // show a background for menu items
  disabled: PropTypes.bool, //disable this Menu
  align: PropTypes.oneOf(['left', 'right']), // align this item to left or right position
};

export default Item;