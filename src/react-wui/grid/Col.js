import React from "react";
import BaseComponent from "../BaseComponent";
import {inRange, isInteger, isNil} from "../Utils";

export default class Col extends BaseComponent {

  static defaultProps = {};

  static propTypes = {};

  constructor(args) {
    super(args);
    this.state = {};
  }

  validate() {
    const {
      xs, sm, md, lg, xl, xsOffset, smOffset,
      mdOffset, lgOffset, xlOffset, order
    } = this.props;
    [xs, sm, md, lg, xl, xsOffset, smOffset, mdOffset, lgOffset,
      xlOffset].forEach(value => {
      if (!isNil(value) && !inRange(value, 1, 13)) {
        throw new Error(
            "The value of xs/sm/md/lg/xl/xsOffset/smOffset/mdOffset"
            + "/lgOffset/xlOffset, should be in a integer range [1,12].")
      }
    });
    if (!isNil(order) && !isInteger(order)) {
      throw new Error("the order is invalid: " + order);
    }
  }

  getClsName(prefix, value) {
    if (!isNil(value)) {
      return `${prefix}${value} `;
    }
    return "";

  }

  render() {
    const {
      xs, sm, md, lg, xl,
      xsOffset, smOffset, mdOffset, lgOffset, xlOffset,
      order,
      children, className, appendClass,
      ...otherProps
    } = this.props;

    this.validate();

    let cls = this.getClsName("col-", xs)
        + this.getClsName("col-sm-", sm)
        + this.getClsName("col-md-", md)
        + this.getClsName("col-lg-", lg)
        + this.getClsName("col-xl-", xl)
        + this.getClsName("offset-", xsOffset)
        + this.getClsName("offset-sm-", smOffset)
        + this.getClsName("offset-md-", mdOffset)
        + this.getClsName("offset-lg-", lgOffset)
        + this.getClsName("offset-xl-", xlOffset)
        + this.getClsName("order-", order);

    let clsName = this.getClass({[cls]: cls});

    return <div className={clsName} {...otherProps}>
      {children}
    </div>;

  }

}