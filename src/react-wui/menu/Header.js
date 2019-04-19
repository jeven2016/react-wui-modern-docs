import React, {Component} from 'react';
import {getRandomValue} from '../Utils';
import BaseComponent from '../BaseComponent';

export default class Header extends BaseComponent {
  static defaultProps = {
    className: 'menu-header',
  };

  render() {
    const {children} = this.props;
    let clsName = this.getClass({});

    return (
        <div className={clsName}>
          {children}
        </div>
    );
  }
}