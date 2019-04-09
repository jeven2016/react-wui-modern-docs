import React from "react";
import BaseComponent from "../BaseComponent";

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'item'
  };

  render() {
    const {
      block,
      children,
      className,
      hasBackground,
      hasBar,
      active,
      ...otherProps
    } = this.props;

    let clsName = this.getClass({
      "with-bg": hasBackground,
      block,
      "with-bar": hasBar,
      active: active
    });

    return <li className={clsName} {...otherProps}>{children}</li>;
  }

}