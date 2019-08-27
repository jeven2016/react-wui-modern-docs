import React from 'react';
import BaseComponent from "../BaseComponent";
import Button from "../button";

//todo remove .title, the title can only be button / span
export default class Title extends BaseComponent {
  render() {
    const {clickTitle, children} = this.props;
    return (
        <Button onClick={clickTitle} extraClassName="title">
          {children}
        </Button>
    );
  }

}