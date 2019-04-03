import React from "react";
import BaseComponent from "../BaseComponent";

export default class Link extends BaseComponent {
  static defaultProps = {
    className: 'link'
  };

  render() {
    const {
      children,
      className,
      appendClass,
      ...otherProps
    } = this.props;
    let clsName = this.getClass();

    return <a className={clsName} {...otherProps}>{children}</a>;
  }

}