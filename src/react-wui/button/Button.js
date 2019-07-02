import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

const Button = React.forwardRef((props, ref) => {
  const {
    className,
    children,
    nativeType,
    type,
    block,
    color,
    active = false,
    size,
    outline,
    circle,
    hasMinWidth,
    onClick,
    disabled = false,
    withinGroup,
    extraClassName,
    elementType: ElementType,
    ...otherProps
  } = props;

  const btnRef = ref ? ref : useRef(null);

  useEffect(() => {
    // focus && btnRef.current.focus();
  });

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    [size]: size,
    [color]: color,
    block: block,
    disabled: disabled,
    active: active,
    outline: outline,
    circle: circle,
    label: withinGroup,
    "min-width": hasMinWidth
  });

  return (
      <ElementType className={clsName} onClick={onClick} disabled={disabled}
                   type={nativeType ? nativeType : 'button'}
                   {...otherProps}
                   ref={btnRef}>
        {children}
      </ElementType>
  );
});

Button.defaultProps = {
  elementType: "button",
  disabled: false,
  className: 'button',
  withinGroup: false,
  role: null, //only for internal use
  hasMinWidth: false
};

Button.propTypes = {
  elementType: PropTypes.oneOf(["a", "button"]), // 'a' or 'button'
  type: PropTypes.string,   //it can only be blank or 'button' and it has nothing to do with native html type
  nativeType: PropTypes.oneOf(['button', 'reset', 'submit', 'a']), //the native html type, like 'button', 'reset' or 'submit'
  block: PropTypes.bool, //whether the button is a 'block' button whose width is '100%' and occupy the whole row
  color: PropTypes.string, //the color, like "primary", "red"
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool, //disable this button
  active: PropTypes.bool, // active this button
  onClick: PropTypes.func, //the click callback provided
  size: PropTypes.oneOf(['large', 'medium', 'small', '']), //the size of the button
  outline: PropTypes.bool,
  circle: PropTypes.bool,
  hasMinWidth: PropTypes.bool,  // has min-width style
  withinGroup: PropTypes.bool, //whether this input is under controlled by a input-group
};

export default Button;
