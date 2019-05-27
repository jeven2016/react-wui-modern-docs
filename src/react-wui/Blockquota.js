import React from "react";
import BaseComponent from "./BaseComponent";

export default class Blockquota extends BaseComponent {

  static defaultProps = {
    className: 'blockquote'
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.state = {};
  }

  render() {
    const {
      className, appendClass, children, type, hasBorder,
      hasBox,
      hasBackground
    } = this.props;
    let clsName = this.getClass({
      [type]: type,
      border: hasBorder,
      "with-bg": hasBackground,
      "with-box": hasBox
    });
    return <div className={clsName}>
      {children}
    </div>;

  }

}