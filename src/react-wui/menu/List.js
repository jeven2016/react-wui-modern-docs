import React from 'react';
import BaseComponent from '../BaseComponent';
import {GlobalClickContext} from './Menu';

export default class List extends BaseComponent {
  static defaultProps = {
    className: 'menu-list',
  };

  render() {
    const {className, children, key} = this.props;
    let clsName = this.getClass({
    });

    return (
        <GlobalClickContext.Consumer>
          {({onClick, activeItem}) => (
              <div className={clsName}>
                {children}
              </div>
          )}
        </GlobalClickContext.Consumer>
    );
  }

}