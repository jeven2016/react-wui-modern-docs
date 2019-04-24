import React from 'react';
import BaseComponent from '../BaseComponent';
import PropTypes from 'prop-types';
import {NavBarFixedTypes} from '../common/Constants';
import {isNil} from '../Utils';

export default class NavBar extends BaseComponent {

  static defaultProps = {
    className: 'navbar',
    type: '',
  };

  static propTypes = {
    type: PropTypes.oneOf(['primary', '']),   //it can only be blank or 'button' and it has nothing to do with native html type
    className: PropTypes.string, //the class name of button
    fixed: PropTypes.string, //fixed top or bottom
  };

  render() {
    const {
      children,
      type,
      className,
      fixed,
      appendClass,
      ...otherProps
    } = this.props;

    let fixedType = this.computeFixedType(fixed);
    let clsName = this.getClass({
      [type]: type,
      [fixedType]: fixedType,
    });

    return (
        <ul className={clsName}>
          {children}
        </ul>
    );
  }

  computeFixedType = (fixed) => {
    let fixedType = NavBarFixedTypes.filter(type => type === fixed);
    return isNil(fixedType) || fixedType.length === 0 ? '' : 'fixed '
        + fixedType[0];
  };
}