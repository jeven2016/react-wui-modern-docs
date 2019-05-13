import React from 'react';
import BaseComponent from "../BaseComponent";

export default class Title extends BaseComponent {
  render() {
    const {clickTitle, children} = this.props;
    return (
        <div onClick={clickTitle} className="title">
          {children}
        </div>
    );
  }

}