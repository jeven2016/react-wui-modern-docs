import React, {Component} from "react";
import BaseComponent from "../BaseComponent";

export default class Title extends BaseComponent {
  static defaultProps = {
    className: 'title'
  };

  render() {
    const {
      children,
      className,
      ...otherProps
    } = this.props;

    let clsName = this.getClass();

    return <li className={clsName} {...otherProps}>{children}</li>;
  }

}