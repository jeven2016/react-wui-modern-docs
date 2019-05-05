import React from 'react';
import BaseMenu from './BaseMenu';
import {MenuContext} from "../Utils";
import {MenuType} from "../common/Constants";
import {WindowEventHandler} from "../event";

export default class SubMenu extends BaseMenu {
  static defaultProps = {
    className: 'submenu',
    isTopSubMenu: false //only for internal use
  };

  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  static contextType = MenuContext;

  constructor(args) {
    super(args);
    this.state = {
      showMenuList: true,
      activeFloatMenu: false
    };

    //associate the methods with a Menu instance
    this.handleHeader = this.handleHeader.bind(this);

    this.ref = React.createRef();
  }

  closeFloatMenu(evt) {
    const {isTopSubMenu} = this.props;
    if (!isTopSubMenu) {
      return;
    }

    // let subMenu= ReactDOM.findDOMNode(this);
    let inside = this.ref.current.contains(evt.target);

    // if the header is one child of current sub-menu, the menu list cannot be closed
    if (inside) {
      return;
    }
    this.updateActiveStatus(false);
  }

  updateActiveStatus(value) {
    if (this.state.activeFloatMenu === value) {
      return;
    }

    this.setState({
      activeFloatMenu: value,
    });
  }

  handleHeader(headerId, evt) {
    const {isTopSubMenu} = this.props;
    if (isTopSubMenu && this.isFloatMenu()) {
      this.updateActiveStatus(true);
    } else {
      super.handleHeader(headerId, evt);
    }
  }

  isFloatMenu() {
    return this.context.menuType === MenuType.float;
  }

  render() {
    const {className, children, isTopSubMenu} = this.props;
    let clsName = this.getClass({
      'close': !this.isFloatMenu()
          && !this.state.showMenuList,
      active: this.isFloatMenu()
          && this.state.activeFloatMenu
    });

    console.log("isTopSubMenu=" + isTopSubMenu);
    let updatedChildren = this.updateChildren(children);

    let evtHandler = isTopSubMenu && this.isFloatMenu() ?
        <WindowEventHandler onClick={this.closeFloatMenu.bind(this)}/> : null;

    return <div className={clsName} ref={this.ref}>
      {evtHandler}
      {updatedChildren}
    </div>;
  }
}