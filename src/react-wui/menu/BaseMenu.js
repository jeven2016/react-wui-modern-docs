import React from 'react';
import BaseComponent from '../BaseComponent';
import Header from './Header';

export default class BaseMenu extends BaseComponent {
  constructor(args) {
    super(args);
    // this.clickItem = this.clickItem.bind(this);
    // this.clickHeader = this.clickHeader.bind(this);
    //
    console.log("target=" + new.target.name);
  }

  handleHeader(headerId, evt) {
    let callback = this.props.onClickHeader;
    if (callback) {
      callback(headerId);
    }

    this.setState({
      showMenuList: !this.state.showMenuList,
    });

    // preventEvent(evt);
  }

  handleItem(id, isHeaderClick) {
    this.setState({
      clickedItem: id,
    });

    let callback = this.props.onClickItem;
    if (callback) {
      callback(id);
    }
  }

  updateChildren(children) {
    let updatedChildren = React.Children.map(children, (child) => {
      let childType = child.type;
      if (childType === Header) {
        return React.cloneElement(child, {
          clickHeader: this.handleHeader,
        });
      }
      return child;
    });
    return updatedChildren;
  }

}
