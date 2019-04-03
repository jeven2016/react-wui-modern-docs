import React from "react";
import BaseComponent from "../BaseComponent";
import {NavBarListAlign} from "../common/Constants";

export default class List extends BaseComponent {
  static defaultProps = {
    className: 'list',
    align: "left"
  };

  render() {
    const {
      children,
      className,
      align,
      ...otherProps
    } = this.props;

    let alignClsName = NavBarListAlign[align];

    let clsName = this.getClass({[alignClsName]: alignClsName});

    return <ul className={clsName} {...otherProps}>{children}</ul>;
  }

}