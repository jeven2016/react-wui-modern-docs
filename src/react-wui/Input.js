import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {InputBorderType} from "./common/Constants";
import BaseComponent from "./BaseComponent";

class IconInput extends BaseComponent {
  static defaultProps = {
    disabled: false,
    className: 'icon-input',
    size: "medium"
  };

  static propTypes = {
    extraClassName: PropTypes.string, //the customized class need to add
    leftIcon: PropTypes.bool, // whether the icon is placed in left side of the input
    size: PropTypes.oneOf(["large", "medium", "small"]),
    block: PropTypes.bool,
  };

  render() {
    const {
      borderType, children, leftIcon, className,
      extraClassName,
      size, block, ...otherProps
    } = this.props;
    let borderTypeCls = InputBorderType[borderType];
    let clsName = clsx(extraClassName, className, {
      'left-icon': leftIcon,
      [size]: size,
      block: block,
      [borderTypeCls]: borderTypeCls,
    });

    return <div className={clsName} {...otherProps}>
      {children}
    </div>;
  }
}

class Input extends BaseComponent {
  static defaultProps = {
    type: 'text',
    className: 'input',
    placeholder: '',
  };

  static propTypes = {
    size: PropTypes.string,
    type: PropTypes.string.isRequired,//"text", "textarea", "password", "file", etc.
    block: PropTypes.bool,
    className: PropTypes.string.isRequired,
    extraClassName: PropTypes.string, //the customized class need to add
    disabled: PropTypes.bool,
  };

  static IconInput = IconInput;

  render() {
    const {
      borderType,
      size,
      type,
      block,
      className,
      extraClassName,
      disabled,
      ...otherProps
    } = this.props;

    let borderTypeCls = InputBorderType[borderType];

    let clsName = clsx(extraClassName, className, {
      [size]: size,
      block: block,
      [borderTypeCls]: borderTypeCls
    });

    if (type.toLowerCase() === "textarea") {
      return <textarea className={clsName} {...otherProps} disabled={disabled}/>
    }
    return (
        <input className={clsName} type={type} {...otherProps}
               disabled={disabled}/>
    );

  }
}

export default Input;