import React from 'react';
import BaseComponent from '../BaseComponent';
import {GlobalClickContext} from './Menu';

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'item',
    hasBox: false,
    hasBackground: false
  };

  itemClick(onClick) {
    onClick(this.props.id);
  }

  render() {
    const {className, active, hasBox, disabled, children, paddingLeft, id, hasBackground} = this.props;

    return (
        <GlobalClickContext.Consumer>
          {({activeItem, clickItem}) => {
            let clsName = this.getClass({
              "with-box": hasBox,
              "with-bg": hasBackground,
              active: activeItem != null && activeItem === this.props.id,
              disabled
            });
            return <li className={clsName}
                       id={id}
                       style={{paddingLeft: paddingLeft}}
                       onClick={this.itemClick.bind(this, clickItem)}>
              {children}
            </li>;
          }}

        </GlobalClickContext.Consumer>
    );
  }
}