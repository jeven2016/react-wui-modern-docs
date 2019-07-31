import React from "react";
import BaseComponent from "../BaseComponent";
import {AlignItemsType, JustifyContentType} from "../common/Constants";

export default class Row extends BaseComponent {

  static defaultProps = {
    className: 'row',
    justify: JustifyContentType.start,
    align: AlignItemsType.start
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.state = {};
  }

  render() {
    const {children, justify, align, className, appendClass, ...otherProps} = this.props;
    let justifyCls = JustifyContentType[justify];
    let alignCls = AlignItemsType[align];
    let clsName = this.getClass({
      [justifyCls]: justifyCls,
      [alignCls]: alignCls,
    });

    return <div className={clsName} {...otherProps}>
      {children}
    </div>;

  }

}