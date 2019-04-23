import React from 'react';
import BaseComponent from '../BaseComponent';

export const GlobalClickContext = React.createContext();

export default class Menu extends BaseComponent {
  static defaultProps = {
    className: 'menu',
    hasBorder: true,
    activeItem: null,
    openMenu: [],
  };

  render() {
    const {
      className, hasBorder, children, onClick,
      activeItem,
      openMenu,
    } = this.props;
    let clsName = this.getClass({
      'clear-border': !hasBorder,
    });

    return (
        <GlobalClickContext.Provider
            value={{
              activeItem: activeItem,
              onClick: onClick,
              openMenu: openMenu,
            }}>
          <div className={clsName}>
            {children}
          </div>
        </GlobalClickContext.Provider>
    );
  }
}
