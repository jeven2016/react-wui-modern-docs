import React from 'react';
import BaseComponent from '../BaseComponent';
import {GlobalClickContext} from './Menu';

export default class Header extends BaseComponent {
  static defaultProps = {
    className: 'menu-header',
    active: false,
  };

  constructor(args) {
    super(args);
    this.state = {
      activeHeader: false,
    };
  }

  render() {
    const {id, className, children, clickHeader, paddingLeft} = this.props;
    let clsName = this.getClass({
      active: this.state.activeHeader
    });
    return (
        <GlobalClickContext.Consumer>
          {({onItemClick}) => {
            return <li className={clsName}
                       onClick={clickHeader}
                       style={{paddingLeft: paddingLeft}}>
              {children}
            </li>;
          }}
        </GlobalClickContext.Consumer>
    );
  }
}