import React from 'react';
import BaseComponent from '../BaseComponent';
import {MenuContext} from "../Utils";
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

  headerClick(clickHeader, menuType, evt) {
    clickHeader(this.props.id, evt);
    if (menuType === MenuType.float) {
      this.setState({
        activeHeader: !this.state.activeHeader
      });
    }
  }

  render() {
    const {id, className, children, clickHeader, paddingLeft} = this.props;
    let clsName = this.getClass({
      // active: this.state.activeHeader
    });
    return (
        <MenuContext.Consumer>
          {({menuType}) => {
            return <li className={clsName}
                       onClick={this.headerClick.bind(this, clickHeader,
                           menuType)}
                       style={{paddingLeft: paddingLeft}}>
              {children}
            </li>;
          }}
        </MenuContext.Consumer>
    );
  }
}