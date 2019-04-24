import React from 'react';
import BaseComponent from '../BaseComponent';
import {isNil} from '../Utils';

export const GlobalClickContext = React.createContext();

export default class Menu extends BaseComponent {
  static defaultProps = {
    className: 'menu',
    hasBorder: true,
    activeItem: null,
    openMenu: [], //set menu id
    onItemClick: null,
    type: null, //primary, dark
  };

  constructor(args) {
    super(args);
    this.clickItem = this.clickItem.bind(this);
    this.state = {
      clickedItem: null,
    };
  }

  clickItem(id) {
    this.setState({
      clickedItem: id,
    });
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
      className, hasBorder, children, onClick,
      type,
      activeItem,
      openMenu,
    } = this.props;
    let clsName = this.getClass({
      'clear-border': !hasBorder,
      [type]: type,
    });

    return (
        <GlobalClickContext.Provider
            value={{
              activeItem: this.getCurrentActiveIem(),
              onItemClick: this.clickItem,
              openMenu: openMenu,
            }}>
          <div className={clsName}>
            {children}
          </div>
        </GlobalClickContext.Provider>
    );
  }
}
