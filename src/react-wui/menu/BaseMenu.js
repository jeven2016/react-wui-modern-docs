import React from 'react';
import BaseComponent from '../BaseComponent';
import Header from './Header';

export default class BaseMenu extends BaseComponent {
  constructor(args) {
    super(args);
    this.clickItem = this.clickItem.bind(this);
    this.clickHeader = this.clickHeader.bind(this);
  }

  clickItem(id, isHeaderClick) {
    if (isHeaderClick) {
      this.setState({
        showMenuList: !this.state.showMenuList,
      });
      return;
    }
    this.setState({
      clickedItem: id,
    });
  }

  clickHeader(headerId) {
    const {onHeaderClick} = this.props;
    let openMenuList = true;
    if (onHeaderClick) {
      openMenuList = onHeaderClick(headerId);
    }

    if (openMenuList) {
      this.setState({
        showMenuList: !this.state.showMenuList,
      });
    }
  }

  updateChildren(children) {
    let updatedChildren = React.Children.map(children, (child) => {
      if (child.type === Header) {
        return React.cloneElement(child, {
          clickHeader: this.clickHeader,
        });
      }
      return child;
    });
    return updatedChildren;
  }
}
