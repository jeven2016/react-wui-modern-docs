import React from 'react';
import BaseComponent from '../BaseComponent';
import {GlobalClickContext} from './Menu';

export default class Header extends BaseComponent {
  static defaultProps = {
    className: 'menu-header',
  };

  render() {
    const {id, className, children, clickHeader} = this.props;
    let clsName = this.getClass();
    return (
        <GlobalClickContext.Consumer>
          {({onItemClick}) => {
            return <div className={clsName}
                        onClick={clickHeader}>
              {children}
            </div>;
          }}
        </GlobalClickContext.Consumer>
    );
  }
}