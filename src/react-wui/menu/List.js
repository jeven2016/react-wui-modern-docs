import React from 'react';
import BaseComponent from '../BaseComponent';
import {MenuContext} from "../Utils";

export default class List extends BaseComponent {
  static defaultProps = {
    className: 'menu-list',
  };

  render() {
    const {className, children, key} = this.props;
    let clsName = this.getClass({
    });

    return (
        <MenuContext.Consumer>
          {({onClick, activeItem}) => (
              <ul className={clsName}>
                {children}
              </ul>
          )}
        </MenuContext.Consumer>
    );
  }

}