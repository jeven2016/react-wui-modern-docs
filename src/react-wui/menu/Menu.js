import React from 'react';
import BaseComponent from '../BaseComponent';

const GlobalClickContext = React.createContext();

export default class Menu extends BaseComponent {
  static defaultProps = {
    className: 'menu',
    hasBorder: true,
  };

  render() {
    const {
      className, hasBorder, children, onClick,
      open = true,
    } = this.props;
    let clsName = this.getClass({
      'clear-border': !hasBorder,
    });

    return (
        <GlobalClickContext.Provider value={onClick}>
          <div className={clsName}>
            {children}
          </div>
        </GlobalClickContext.Provider>
    );
  }
}
