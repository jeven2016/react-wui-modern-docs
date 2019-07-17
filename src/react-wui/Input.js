import React, {Component} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {InputBorderType} from "./common/Constants";

class IconInput extends Component {
  static defaultProps = {
    disabled: false,
    className: 'icon-input',
    withinGroup: false,
    size: "medium"
  };

  static propTypes = {
    extraClassName: PropTypes.string, //the customized class need to add
    leftIcon: PropTypes.bool, // whether the icon is placed in left side of the input
    size: PropTypes.oneOf(["large", "medium", "small"]),
    block: PropTypes.bool,
    withinGroup: PropTypes.bool, //whether this input is under controlled by a input-group
  };

  render() {
    const {
      borderType, children = [], leftIcon, className,
      extraClassName,
      size, block, withinGroup, ...otherProps
    } = this.props;
    let borderTypeCls = InputBorderType[borderType];
    let clsName = clsx(extraClassName, className, {
      'left-icon': leftIcon,
      [size]: size,
      block: block,
      [borderTypeCls]: borderTypeCls,
      element: withinGroup, //add 'element' to class if this input is under controlled by input-group
    });

    return <div className={clsName} {...otherProps}>
      {children}
    </div>;
  }
}

class Input extends Component {
  static defaultProps = {
    nativeType: 'text',
    className: 'input',
    expanded: false,
    withinGroup: false,
    placeholder: '',
  };

  static propTypes = {
    size: PropTypes.string,
    nativeType: PropTypes.string,//"text", "textarea", "password", "file",
    block: PropTypes.bool,
    className: PropTypes.string,
    extraClassName: PropTypes.string, //the customized class need to add
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    withinGroup: PropTypes.bool, //whether this input is under controlled by a input-group
    expanded: PropTypes.bool, // whether the input is expanded in input-group, it only take effect with input-group
  };

  static IconInput = IconInput;

  render() {
    const {
      borderType,
      size,
      nativeType,
      block,
      className,
      extraClassName,
      placeholder,
      expanded,
      withinGroup,
      ...otherProps
    } = this.props;

    let borderTypeCls = InputBorderType[borderType];

    let clsName = clsx(extraClassName, className, {
      [size]: size,
      expanded: expanded,
      element: withinGroup,
      block: block,
      [borderTypeCls]: borderTypeCls
    });

    let ElementType = nativeType === "textarea" ? nativeType : "input";
    return (
        <ElementType className={clsName} type={nativeType}
                     placeholder={placeholder} {...otherProps}/>
    );

  }
}

export default Input;