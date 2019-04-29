import React from 'react';
import BaseComponent from "../BaseComponent";

export default class Card extends BaseComponent {
  static defaultProps = {
    className: 'card',
    block: false,
    apppendClass: null
  };

  render() {
    const {className, block, children, apppendClass} = this.props;
    let clsName = this.getClass({
      [apppendClass]: apppendClass,
      block
    });
    return <div className={clsName}>
      {children}
    </div>;
  }
}