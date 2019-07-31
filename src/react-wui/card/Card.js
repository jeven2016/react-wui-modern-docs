import React from 'react';
import BaseComponent from '../BaseComponent';

export default class Card extends BaseComponent {
  static defaultProps = {
    className: 'card',
    block: false,
    apppendClass: null,
    autoScale: false,
  };

  render() {
    const {className, autoScale, block, children, apppendClass, ...otherProps} = this.props;
    let clsName = this.getClass({
      [apppendClass]: apppendClass,
      block,
      scale: autoScale,
    });
    return <div className={clsName} {...otherProps}>
      {children}
    </div>;
  }
}