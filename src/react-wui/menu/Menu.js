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
    onClickItem: null,
    onClickHeader: null,
    type: null, //primary, dark, float
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

  render() {
    const {
      block, className, hasBorder, children,
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

    let updatedChildren = this.updateChildren(children);

    return (
        <GlobalClickContext.Provider
            value={{
              activeItem: this.getCurrentActiveIem(),
              clickItem: this.handleItem,
              openMenu: openMenu,
              menuType: type
            }}>
          <ul className={clsName} {...otherProps}>
            {updatedChildren}
          </ul>
        </GlobalClickContext.Provider>
    );
  }

}
