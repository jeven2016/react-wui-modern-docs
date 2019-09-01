import React from 'react';
import clsx from 'clsx';

const Element = React.forwardRef((props, ref) => {
  const {
    className,
    nativeType: Element = 'div',
    extraClassName,
    disabled = false,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
  } = props;

  const handleClick = (e) => {
    if (!disabled) return;
    onClick && onClick(e);
  };

  const handleMouseEnter = (e) => {
    if (!disabled) return;
    onMouseEnter && onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    if (!disabled) return;
    return onMouseLeave(e);
  };

  const handleFocus = (e) => {
    if (!disabled) return;
    return onFocus(e);
  };

  const handleBlur = (e) => {
    if (!disabled) return;
    return onBlur(e);
  };

  let clsName = clsx(extraClassName, className);
  return <Element
      className={clsName}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
  />;
});