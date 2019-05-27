import React, {Component} from 'react';
import BaseComponent from '../BaseComponent';

export default class Header extends BaseComponent {
  static defaultProps = {
    className: 'card-header',
  };

  render() {
    const {hasBackground, className, appendClass, children} = this.props;
    let clsName = this.getClass({
      gray: hasBackground,
    });
    return <div className={clsName}>
      {children}
    </div>;
  }
}