import React, {Component} from "react";

export default class List extends Component {
  static defaultProps = {
    className: 'list'
  };

  render() {
    const {
      children,
      className,
      ...otherProps
    } = this.props;

    return <ul className={className} {...otherProps}>{children}</ul>;
  }

}