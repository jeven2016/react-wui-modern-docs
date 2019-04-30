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

    //associate the methods with a Menu instance
    this.handleHeader = this.handleHeader.bind(this);
  }

  render() {
    const {className, children} = this.props;
    let clsName = this.getClass({
      'close': !this.state.showMenuList,
    });

    let updatedChildren = this.updateChildren(children);

    return <div className={clsName}>
      {updatedChildren}
    </div>;
  }
}