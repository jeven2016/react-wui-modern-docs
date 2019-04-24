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

  render() {
    const {className, active, disabled, children} = this.props;
    let clsName = this.getClass({
      active,
      disabled,
    });

    return (
        <GlobalClickContext.Consumer>
          {({activeItem, onItemClick}) => {
            console.log(this.props.id + '=' + activeItem);
            return <div className={clsName}
                        onClick={this.itemClick.bind(this, onItemClick)}>
              {children}
            </div>
          }}

        </GlobalClickContext.Consumer>
    );
  }
}