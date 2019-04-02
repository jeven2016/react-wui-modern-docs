import React, {Component} from "react";

export default class Item extends Component {
  static defaultProps = {
    className: 'item'
  };

  render() {
    const {
      children,
      className,
      hasBackground,
      active,
      ...otherProps
    } = this.props;

    let clsName = this.getClass({
      "with-bg": hasBackground,
      active: active
    });

    return <li className={clsName} {...otherProps}>{children}</li>;
  }

}