import React from "react";
import BaseComponent from "./BaseComponent";

export default class Mask extends BaseComponent {
  static defaultProps = {
    className: "mask"
  };

  render() {
    const {className, appendClass, active, onClick, children, ...otherProps} = this.props
    let clsName = this.getClass({
      active: active,
      inactive: !active
    });
    return <div className={clsName} onClick={onClick} {...otherProps}>
      {children}
    </div>
  }
}