import React from 'react';
import BaseComponent from './BaseComponent';

export default class Icon extends BaseComponent {
  static defaultProps = {
    className: 'icon',
  };

  render() {
    const {className, appendClass, color, children, ...otherProps} = this.props;
    let clsName = this.getClass({
      [appendClass]: appendClass,
    });
    return (<i className={clsName} {...otherProps}>{children}</i>);
  }
}