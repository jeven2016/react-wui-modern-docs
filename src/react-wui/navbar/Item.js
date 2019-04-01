import React, {Component} from "react";

export default class Item extends Component {
  static defaultProps = {
    className: 'item'
  };

  render() {
    const {
      children,
      className,
      ...otherProps
    } = this.props;

    return <li className={className} {...otherProps}>{children}</li>;
  }

}