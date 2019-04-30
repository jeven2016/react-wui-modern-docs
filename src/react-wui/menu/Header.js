import React from 'react';
import BaseComponent from '../BaseComponent';
import {GlobalClickContext} from './Menu';
import {MenuType} from "../common/Constants";

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
    this.headerClick = this.headerClick.bind(this);
  }

  headerClick(clickHeader, menuType) {
    clickHeader(this.props.id);
    if (menuType === MenuType.float) {
      this.setState({
        activeHeader: !this.state.activeHeader
      });
    }
  }

  render() {
    const {id, className, children, clickHeader, paddingLeft} = this.props;
    let clsName = this.getClass({
      active: this.state.activeHeader
    });
    return (
        <GlobalClickContext.Consumer>
          {({menuType}) => {
            return <li className={clsName}
                       onClick={this.headerClick.bind(this, clickHeader,
                           menuType)}
                       style={{paddingLeft: paddingLeft}}>
              {children}
            </li>;
          }}
        </GlobalClickContext.Consumer>
    );
  }
}