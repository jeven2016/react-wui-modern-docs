import React from 'react';
import BaseComponent from '../BaseComponent';
import {MenuContext} from "../Utils";
import {MenuType} from "../common/Constants";
import PropTypes from "prop-types";

/**
 * Header Component
 */
export default class Header extends BaseComponent {
  static defaultProps = {
    className: 'menu-header'
  };

  static propTypes = {
    className: PropTypes.string, //the class name of Header
  };

  constructor(args) {
    super(args);
    this.state = {
      activeHeader: false,
    };
    this.headerClick = this.headerClick.bind(this);
  }

  headerClick(clickHeader, menuType, evt) {
    if (clickHeader) {
      clickHeader(this.props.id, evt);
    }
    if (menuType === MenuType.float) {
      this.setState({
        activeHeader: !this.state.activeHeader
      });
    }
  }

  render() {
    const {id, className, children, clickHeader, paddingLeft} = this.props;
    let clsName = this.getClass();
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