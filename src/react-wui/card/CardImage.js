import React from 'react';
import BaseComponent from "../BaseComponent";

export default class CardImage extends BaseComponent {
  static defaultProps = {
    className: 'card-img',
    position: "top"
  };

  render() {
    const {position, className, children, appendClass, ...otherProps} = this.props;
    let clsName = this.getClass({
      [position]: position
    });
    return <div className={clsName} {...otherProps} >
      {children}
    </div>;
  }
}