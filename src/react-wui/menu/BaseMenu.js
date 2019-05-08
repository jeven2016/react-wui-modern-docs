import React from 'react';
import BaseComponent from '../BaseComponent';

export default class BaseMenu extends BaseComponent {
  constructor(args) {
    super(args);
    // console.log("target=" + new.target.name);
  }

  handleHeader(headerId, evt) {
    debugger;
    let callback = this.props.onClickHeader;
    if (callback) {
      callback(headerId, evt);
    }

    this.setState({
      showMenuList: !this.state.showMenuList,
    });

  }

  handleItem(id, isHeaderClick) {
    this.setState({
      clickedItem: id,
    });

    let callback = this.props.onClickItem;
    return callback ? callback(id) : null;
  }

}
