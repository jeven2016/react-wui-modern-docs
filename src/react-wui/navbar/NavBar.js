import React from 'react';
import BaseComponent from '../BaseComponent';
import PropTypes from 'prop-types';
import {NavBarFixedTypes} from '../common/Constants';
import {isNil, NavbarContext} from '../Utils';

export default class NavBar extends BaseComponent {

  static defaultProps = {
    className: 'navbar',
    type: '',
    expand: false  // expand the menu list
  };

  static propTypes = {
    type: PropTypes.oneOf(['primary', '']),   //it can only be blank or 'button' and it has nothing to do with native html type
    className: PropTypes.string, //the class name of button
    fixed: PropTypes.string, //fixed top or bottom
  };

  constructor(args) {
    super(args);
    this.state = {
      expandList: null
    };

    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    console.log("clicked ");
    let current = this.state.expandList;
    this.setState({
      expandList: isNil(current) ? !this.props.expand : !current
    });
  }

  render() {
    const {
      children,
      type,
      className,
      fixed,
      appendClass,
      expand,
      ...otherProps
    } = this.props;

    let fixedType = this.computeFixedType(fixed);
    let clsName = this.getClass({
      [type]: type,
      [fixedType]: fixedType,
      expand: isNil(this.state.expandList) ? expand : this.state.expandList
    });

    return (
        <NavbarContext.Provider
            value={{
              toggleList: this.toggleList
            }}>
          <ul className={clsName} {...otherProps}>
            {children}
          </ul>
        </NavbarContext.Provider>
    );
  }

  computeFixedType = (fixed) => {
    let fixedType = NavBarFixedTypes.filter(type => type === fixed);
    return isNil(fixedType) || fixedType.length === 0 ? '' : 'fixed '
        + fixedType[0];
  };
}