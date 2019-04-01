import React, {Component} from "react";

export default class Link extends Component {
  static defaultProps = {
    className: 'link'
  };

  render() {
    const {
      children,
      className,
      ...otherProps
    } = this.props;

    return <a className={className} {...otherProps}>{children}</a>;
  }

}