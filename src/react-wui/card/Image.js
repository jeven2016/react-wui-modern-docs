import React from 'react';
import BaseComponent from "../BaseComponent";

export default class Image extends BaseComponent {
  static defaultProps = {
    className: 'img',
    width: "100%",
  };

  render() {
    const {width, className, appendClass, ...otherProps} = this.props;
    let clsName = this.getClass();
    return <img className={clsName} width={width} {...otherProps}/>;
  }
}