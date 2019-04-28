import React from 'react';
import BaseComponent from "../BaseComponent";

export default class Card extends BaseComponent {
  static defaultProps = {
    className: 'card',
    block: false
  };

  render() {
    const {className, block, children} = this.props;
    let clsName = this.getClass({
      block
    });
    return <div className={clsName}>
      {children}
    </div>;
  }
}