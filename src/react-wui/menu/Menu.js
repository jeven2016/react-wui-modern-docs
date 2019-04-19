import React, {Component} from 'react';
import classnames from 'classnames';
import BaseComponent from '../BaseComponent';

export default class Menu extends BaseComponent {
  static defaultProps = {
    className: 'menu',
    hasBorder: true
  };

  render() {
    const {className, hasBorder, children, onClick} = this.props;
    let clsName = this.getClass({
      'clear-border': !hasBorder,
    });

    return (
        <div className={clsName}>
          {children}
          {/* {
            React.Children.map(children, elem => {
              return React.cloneElement(elem, {onChange: onChange});
            })
          }*/}
        </div>
    );
  }
}
