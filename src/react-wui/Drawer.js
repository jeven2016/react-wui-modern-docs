import React from 'react';
import BaseComponent from './BaseComponent';
import PropTypes from 'prop-types';

export default class Drawer extends BaseComponent {
  static defaultProps = {
    disabled: false,
    className: 'icon-input',
    type: 'normal',
    position: 'left', //left,right,top,bottom
    active: false,
  };

  static propTypes = {};

  render() {
    const {
      type, active, className, width,
      position, children, ...otherProps
    } = this.props;
    let clsName = this.getClass({
      [type]: type,
      [position]: position,
      active,
    });
    return (
        <div className={clsName} {...otherProps}>
          {children}
        </div>
    );
  }

}