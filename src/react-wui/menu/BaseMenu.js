import React from 'react';
import BaseComponent from '../BaseComponent';

export default class BaseMenu extends BaseComponent {
  constructor(args) {
    super(args);
    // console.log("target=" + new.target.name);
  }

  handleHeader(headerId, evt) {
    let callback = this.props.onClickHeader;
    if (callback) {
      callback(headerId, evt);
    }

    if (this.props.canClose) {
      this.setState({
        showMenuList: !this.state.showMenuList,
      });
    }

  }

  /**
   * itemInfo = {id, value, text}
   */
  handleItem(itemInfo, evt) {
    const id = itemInfo.id;
    this.setState({
      clickedItem: id,
    });

    let callback = this.props.onClickItem;
    return callback ? callback(itemInfo, evt) : null;
  }

}
