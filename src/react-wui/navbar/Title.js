import React, {Component} from "react";
import classnames from "classnames";

export default class Title extends Component {
  static defaultProps = {
    className: 'title',
    hasBackground: true,
    active: false
  };

  render() {
    const {
      children,
      className,
      active,
      onClick,
      hasBackground,
      ...otherProps
    } = this.props;

    let clsName = classnames(className, {
      "with-bg": hasBackground,
      active: active
    });

    return <li className={clsName} {...otherProps}>{children}</li>;
  }

}