import React from 'react';
import {PopupCtrlType, Position} from './common/Constants';
import clsx from 'clsx';
import PopupController from './common/PopupController';
import {validateOneChild} from './common/Validators';

const Tooltip = React.forwardRef((props, ref) => {
  const {
    className = 'tooltip',
    triggerBy = PopupCtrlType.hover,
    extraClassName,
    position = 'bottom',
    body,
    children,
    ...otherProps
  } = props;

  validateOneChild(props);

  let clsName = clsx(extraClassName, className);
  let positionClassName = `${Position[position]} popover-arrow`;

  const updateChildren = (chd) => {
    const popupBody = <div className={clsName} ref={ref}>
      <div className={positionClassName}/>
      {body}
    </div>;

    return {body: popupBody, ctrl: children};
  };
  return <PopupController
      ref={ref}
      position={position}
      triggerBy={triggerBy}
      setChildDisabled={false}
      handleChildren={updateChildren}
      {...otherProps}>
    {children}
  </PopupController>;

});

export default Tooltip;
