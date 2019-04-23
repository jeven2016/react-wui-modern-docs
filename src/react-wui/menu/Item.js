import React from 'react';
import BaseComponent from '../BaseComponent';

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'item',
  };

  render() {
    const {className, active, disabled, children} = this.props;
    let clsName = this.getClass({
      active,
      disabled,
    });

    return (
        <div className={clsName}>
          {children}
        </div>
    );
  }
}