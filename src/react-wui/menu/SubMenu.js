import React from 'react';
import BaseMenu from './BaseMenu';
import {FloatMenuContext, isFloatMenu, MenuContext} from "../Utils";
import {WindowEventHandler} from "../event";
import Header from "./Header";
import List from "./List";
import PropTypes from "prop-types";

export default class SubMenu extends BaseMenu {
  static defaultProps = {
    className: 'submenu',
    isTopSubMenu: false //only for internal use
  };

  static propTypes = {
    className: PropTypes.string, //the class name of menu
    isTopSubMenu: PropTypes.bool //whether this submenu is direct child of a menu and can be folded
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
    this.handleFloatMenuItem = this.handleFloatMenuItem.bind(this);

    this.ref = React.createRef();
  }

  /**
   * Close the submenu if the menu's type is float
   * @param evt
   */
  closeFloatMenu(evt) {
    const {isTopSubMenu} = this.props;
    if (!isTopSubMenu) {
      return;
    }

    let inside = this.ref.current.contains(evt.target);

    // if the header is one child of current sub-menu, the menu list cannot be closed
    if (inside) {
      return;
    }
    this.updateActiveStatus(false);
  }

  /**
   * Display submenu or not
   * @param value status
   */
  updateActiveStatus(value) {
    if (this.state.activeFloatMenu === value) {
      return;
    }

    this.setState({
      activeFloatMenu: value,
    });
  }

  /**
   * Handle the click event
   * @param headerId
   * @param evt
   */
  handleHeader(headerId, evt) {
    const {isTopSubMenu} = this.props;
    if (isTopSubMenu && this.checkMenu()) {
      this.updateActiveStatus(true);
    } else {
      super.handleHeader(headerId, evt);
    }
  }

  handleFloatMenuItem(id, closeMenu = true, evt) {
    if (this.checkMenu()) {
      this.updateActiveStatus(!closeMenu);
    }
  }

  /**
   * Check whether the menu is float
   * @returns boolean
   */
  checkMenu() {
    return isFloatMenu(this.context.menuType);
  }

  updateChildren(children) {
    let chd = React.Children.map(children, (child) => {
      let childType = child.type;
      if (childType === Header) {
        return React.cloneElement(child, {
          clickHeader: this.handleHeader,
        });
      }

      if (this.checkMenu() && childType === List) {
        return React.cloneElement(child, {
          clickFloatMenuItem: this.handleFloatMenuItem,
        });
      }
      return child;
    });

    return chd;
  }

  render() {
    const {className, children, isTopSubMenu} = this.props;
    let clsName = this.getClass({
      'close': !this.checkMenu()
          && !this.state.showMenuList,
      active: this.checkMenu()
          && this.state.activeFloatMenu
    });

    let updatedChildren = this.updateChildren(children);

    let evtHandler = isTopSubMenu && this.checkMenu() ?
        <WindowEventHandler onClick={this.closeFloatMenu.bind(this)}/> : null;

    let content = <div className={clsName} ref={this.ref}>
      {evtHandler}
      {updatedChildren}
    </div>;

    // create a submenu context for float menu
    if (isTopSubMenu) {
      return <FloatMenuContext.Provider value={{
        clickFloatMenuItem: this.handleFloatMenuItem
      }}>
        {content}
      </FloatMenuContext.Provider>
    }
    return content;
  }
}