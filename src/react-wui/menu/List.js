import React from 'react';
import BaseComponent from '../BaseComponent';

export default class List extends BaseComponent {
  static defaultProps = {
    className: 'menu-list',
  };

  render() {
    const {className,children} = this.props;
    let clsName = this.getClass({});

    return (
        <div className={clsName}>
          {children}
        </div>
    );
  }

}