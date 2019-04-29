import React from 'react';
import BaseComponent from '../BaseComponent';
import Header from './Header';
import List from './List';
import SubMenu from './SubMenu';

export default class BaseMenu extends BaseComponent {
  constructor(args) {
    super(args);
    this.clickItem = this.clickItem.bind(this);
    this.clickHeader = this.clickHeader.bind(this);
  }

  getItemClickCallback() {
    return null;
  }

  getHeaderClickCallback() {
    return null;
  }

  clickItem(id, isHeaderClick) {
    this.setState({
      clickedItem: id,
    });

    let callback = this.getItemClickCallback();
    if (callback) {
      callback(id);
    }
  }

  clickHeader(headerId) {
    let openMenuList = true;
    let callback = this.getHeaderClickCallback();
    if (callback) {
      callback(headerId);
    }

    if (openMenuList) {
      this.setState({
        showMenuList: !this.state.showMenuList,
      });
    }
  }

  updateChildren(children) {
    let initPaddingLeft = 2.5;
    let increment = 1;
    let unit = 'rem';
    let updatedChildren = React.Children.map(children, (child) => {
      let childType = child.type;
      if (childType === Header) {
        return React.cloneElement(child, {
          clickHeader: this.clickHeader,
        });
      }

      if (childType === List) {

//the listIem is list instead of item....
        return React.Children.map(child, (listItem) => {
          console.log("listItem=" + listItem.type);
          return React.cloneElement(listItem,
              {paddingLeft: initPaddingLeft + unit});
        });
      }

      if (childType === SubMenu) {

      }
      return child;
    });
    return updatedChildren;
  }

  travelChildren() {

  }
}
