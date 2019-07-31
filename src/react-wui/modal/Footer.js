import React from 'react';
import BaseComponent from '../BaseComponent';
import {FlexAlign} from '../common/Constants';

export default class Footer extends BaseComponent {
  static defaultProps = {
    className: 'footer',
    align: "right",
  };

  render() {
    const {children, className, appendClass, align} = this.props;
    let clsName = this.getClass({
      [FlexAlign[align]]: align,
    });
    return (
        <div className={clsName}>
          {children}
        </div>
    );
  }

}