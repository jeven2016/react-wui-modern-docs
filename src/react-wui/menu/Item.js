import React from 'react';
import BaseComponent from '../BaseComponent';
import {GlobalClickContext} from './Menu';

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'item',
  };

  itemClick(onClick) {
    onClick(this.props.id);
  }

  getClassName(activeItem) {
    const {active, disabled, id} = this.props;

    let clsName = this.getClass({
      active: activeItem != null && activeItem === id,
      disabled,
    });

    return clsName;
  }

  render() {
    const {className, active, disabled, children, paddingLeft} = this.props;

    return (
        <GlobalClickContext.Consumer>
          {({activeItem, onItemClick}) => {
            console.log(this.props.id + '=' + activeItem);
            return <li className={this.getClassName(activeItem)}
                        style={{paddingLeft: paddingLeft}}
                        onClick={this.itemClick.bind(this, onItemClick)}>
              {children}
            </li>;
          }}

        </GlobalClickContext.Consumer>
    );
  }
}