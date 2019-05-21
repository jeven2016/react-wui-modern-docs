import React from 'react';
import BaseComponent from "../BaseComponent";

export default class Body extends BaseComponent {
  static defaultProps = {
    className: 'body'
  };

  render() {
    const {children, className, appendClass} = this.props;
    let clsName = this.getClass();
    return (
        <div className={clsName}>
          {children}
        </div>
    );
  }

}