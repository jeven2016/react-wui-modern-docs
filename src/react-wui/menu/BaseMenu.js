import React from 'react';
import BaseComponent from '../BaseComponent';
import Header from './Header';
import {isFloatMenu} from "../Utils";
import {isNil} from "lodash";

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
    let value = callback ? callback(id) : null;
   /* if (!isFloatMenu(this.props.type)) {
      return;
    }

    //if 'false' returned from onClick method
    if (!isNil(value) && !value) {
      //do not close the float menu list
      return;
    }
    this.setState({
      showMenuList: false,
    });*/
  }

}
