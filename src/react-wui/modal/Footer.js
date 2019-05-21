import React from 'react';
import BaseComponent from "../BaseComponent";

export default class Footer extends BaseComponent {
  static defaultProps = {
    className: 'footer'
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