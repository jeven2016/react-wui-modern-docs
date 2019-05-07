import React from 'react';
import {isNil, MenuContext} from '../Utils';
import SubMenu from './SubMenu';
import Header from './Header';
import List from './List';
import Item from './Item';
import BaseMenu from './BaseMenu';
import {MenuType} from "../common/Constants";

export default class Menu extends BaseMenu {
  static defaultProps = {
    className: 'menu',
    disabled: false,
    hasBorder: true,
    hasBox: false,
    activeItem: null,
    openMenu: ['all'], // menu id array or 'all'
    onClickItem: null,
    onClickHeader: null,
    type: null //primary, dark, float
  };

  static Header = Header;
  static List = List;
  static SubMenu = SubMenu;
  static Item = Item;

  constructor(args) {
    super(args);

    this.state = {
      clickedItem: null,
      showMenuList: true,
    };

    //associate the methods with a Menu instance
    this.handleHeader = this.handleHeader.bind(this);
    this.handleItem = this.handleItem.bind(this);
  }

  getCurrentActiveIem() {
    let stateItem = this.state.clickedItem;
    let propsItem = this.props.activeItem;

    if (!isNil(stateItem)) {
      return stateItem;
    }
    return propsItem;
  }

  updateChildren(children) {
    const {type} = this.props;
    let chd = children;
    if (type === MenuType.float) {
      chd = React.Children.map(children, child => {
        if (child.type === SubMenu) {
          return React.cloneElement(child, {
            //mark this menu is SubMenu and can be folded
            isTopSubMenu: true,
          });
        }
        if (child.type === Header) {
          return React.cloneElement(child, {
            clickHeader: this.handleHeader,
          });
        }
        return child;
      });
    }
    return chd;
  }

  render() {
    const {
      block, className, hasBorder, children,
      disabled,
      type,
      onClickHeader,
      onClickItem,
      activeItem,
      openMenu,
      hasBox,
      hasBackground,
      ...otherProps
    } = this.props;

    let clsName = this.getClass({
      'clear-border': !hasBorder,
      "with-box": hasBox,
      "with-bg": hasBackground,
      [type]: type,
      block,
      'close': !this.state.showMenuList,
    });

    let updatedChildren = this.updateChildren(children, type);

    return (
        <MenuContext.Provider
            value={{
              activeItem: this.getCurrentActiveIem(),
              clickItem: this.handleItem,
              openMenu: openMenu,
              menuType: type,
              menuDisabled: disabled
            }}>
          <ul className={clsName} {...otherProps}>
            {updatedChildren}
          </ul>
        </MenuContext.Provider>
    );
  }

}
