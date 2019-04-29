import React from 'react';
import {isNil} from '../Utils';
import SubMenu from './SubMenu';
import Header from './Header';
import List from './List';
import Item from './Item';
import BaseMenu from './BaseMenu';

export const GlobalClickContext = React.createContext();

export default class Menu extends BaseMenu {
  static defaultProps = {
    className: 'menu',
    hasBorder: true,
    hasBox: false,
    activeItem: null,
    openMenu: ['all'], // menu id array or 'all'
    onItemClick: null,
    onHeaderClick: null,
    type: null, //primary, dark
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
  }

  getItemClickCallback() {
    return this.props.onItemClick;
  }

  getHeaderClickCallback() {
    return this.props.onHeaderClick;
  }

  getCurrentActiveIem() {
    let stateItem = this.state.clickedItem;
    let propsItem = this.props.activeItem;

    if (!isNil(stateItem)) {
      return stateItem;
    }
    return propsItem;
  }

  render() {
    const {
      block, className, hasBorder, children, onClick, onHeaderClick,
      type,
      onItemClick,
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

    let updatedChildren = this.updateChildren(children);

    return (
        <GlobalClickContext.Provider
            value={{
              activeItem: this.getCurrentActiveIem(),
              onItemClick: this.clickItem,
              openMenu: openMenu,
            }}>
          <ul className={clsName} {...otherProps}>
            {updatedChildren}
          </ul>
        </GlobalClickContext.Provider>
    );
  }

}
