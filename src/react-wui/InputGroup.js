import React, {Component} from 'react';
import clsx from 'clsx';
import PropTypes from "prop-types";

class InputLabel extends Component {
  static defaultProps = {
    className: 'label',
  };

  render() {
    const {className, children} = this.props;
    return (
        <div className={className}>
          {children}
        </div>
    );
  }
}

export default class InputGroup extends Component {
  static defaultProps = {
    disabled: false,
    className: 'input-group',
  };

  static propTypes = {
    className: PropTypes.string, //the class name of button
    extraClassName: PropTypes.string, //the customized class need to add
    block: PropTypes.bool
  };

  static Label = InputLabel;

  render() {
    const {block, children, className, ...otherProps} = this.props;

    let clsName = clsx(className, {
      block: block,
    });

    return (
        <div className={clsName} {...otherProps}>
          {children}
        </div>
    );
  }
}