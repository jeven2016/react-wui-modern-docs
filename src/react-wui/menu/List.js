import React from 'react';
import BaseComponent from '../BaseComponent';

export default class List extends BaseComponent {
  static defaultProps = {
    className: 'menu-list',
  };

  render() {
    const {className, children, key} = this.props;
    let clsName = this.getClass({});

    return <ul className={clsName}>
      {children}
    </ul>;
  }

}