import React from 'react';
import BaseComponent from '../BaseComponent';

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
    return callback ? callback(id) : null;
  }

}
