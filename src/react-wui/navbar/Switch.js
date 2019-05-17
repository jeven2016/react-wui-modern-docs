import React from 'react';
import BaseComponent from '../BaseComponent';
import PropTypes from 'prop-types';
import {NavbarContext} from '../Utils';

export default class Switch extends BaseComponent {
  static defaultProps = {
    className: 'button navbar-switch'
  };

  static propTypes = {
    type: PropTypes.oneOf(['primary', '']),   //it can only be blank or 'button' and it has nothing to do with native html type
    className: PropTypes.string, //the class name of button
    fixed: PropTypes.string, //fixed top or bottom
  };

  render() {
    const {children, className, appendClass, ...otherProps} = this.props;
    let clsName = this.getClass();

    return (
        <NavbarContext.Consumer>
          {
            ({toggleList}) => (<button className={clsName}
                                       onClick={toggleList} {...otherProps}>
              {children}
            </button>)
          }

        </NavbarContext.Consumer>
    );
  }
}