import React from 'react';
import BaseComponent from '../BaseComponent';

export default class SubMenu extends BaseComponent {
  static defaultProps = {
    className: 'submenu',
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