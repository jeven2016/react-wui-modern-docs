import React from "react";
import BaseComponent from "./BaseComponent";

export default class Accordion extends BaseComponent {

  static defaultProps = {
    className: 'accordion'
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.state = {};
  }

  render() {
    const {className, block, children, apppendClass, ...otherProps} = this.props;
    let clsName = this.getClass({
      block
    });
    return <>
      <div className={clsName}>
        {children}
      </div>
    </>;

  }

}