import React from 'react';
import BaseComponent from '../BaseComponent';

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'item',
    alignRight: false
  };

  render() {
    const {
      block,
      children,
      className,
      hasBackground,
      hasBar,
      active,
      alignRight,
      ...otherProps
    } = this.props;

    let clsName = this.getClass({
      'with-bg': hasBackground,
      block,
      'with-bar': hasBar,
      active: active,
      "pull-right": alignRight
    });

    return <li className={clsName} {...otherProps}>{children}</li>;
  }

}