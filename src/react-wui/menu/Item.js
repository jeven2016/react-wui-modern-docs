import React from 'react';
import BaseComponent from '../BaseComponent';

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'item',
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