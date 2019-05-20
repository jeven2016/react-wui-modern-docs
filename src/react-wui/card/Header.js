import React, {Component} from 'react';
import BaseComponent from '../BaseComponent';

export default class Header extends BaseComponent {
  static defaultProps = {
    className: 'card-header',
  };

  render() {
    const {className, appendClass, children} = this.props;
    let clsName = this.getClass();
    return <div className={clsName}>
      {children}
    </div>;
  }
}