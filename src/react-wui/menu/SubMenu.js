import React from 'react';
import BaseMenu from './BaseMenu';

export default class SubMenu extends BaseMenu {
  static defaultProps = {
    className: 'submenu',
  };

  constructor(args) {
    super(args);
    this.state = {
      showMenuList: true
    };
  }

  render() {
    const {className, children} = this.props;
    let clsName = this.getClass({
      'close': !this.state.showMenuList,
    });

    let updatedChildren = this.updateChildren(children);

    return <ul className={clsName}>
      {updatedChildren}
    </ul>;
  }

}