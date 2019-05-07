import React from 'react';
import BaseComponent from '../BaseComponent';
import {FloatMenuContext, MenuContext} from "../Utils";

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'item',
    hasBox: false,
    hasBackground: false,
    disabled: false,
    align: null, //left or right
  };

  static contextType = MenuContext;

  itemClick(clickItem, clickFloatMenuItem, evt) {
    if (this.props.disabled || this.context.menuDisabled) {
      console.log("this item is disabled");
      return;
    }
    let closeMenu = clickItem(this.props.id);
    console.log(clickItem);

    if (clickFloatMenuItem) {
      clickFloatMenuItem(this.props.id, closeMenu, evt);
    }
  }

  render() {
    const {
      className,
      active,
      align,
      hasBox,
      disabled,
      children,
      paddingLeft,
      id,
      hasBackground
    } = this.props;

    return (
        <MenuContext.Consumer>
          {({activeItem, clickItem, menuDisabled}) =>
              <FloatMenuContext.Consumer>
                {({clickFloatMenuItem}) =>
                    <li className={this.extracted(activeItem, clickItem,
                        menuDisabled)}
                        id={id}
                        style={{paddingLeft: paddingLeft}}
                        onClick={this.itemClick.bind(this, clickItem,
                            clickFloatMenuItem)}>
                      {children}
                    </li>
                }
              </FloatMenuContext.Consumer>
          }
        </MenuContext.Consumer>
    );
  }

  extracted(activeItem, clickItem, menuDisabled) {
    const {
      className,
      active,
      align,
      hasBox,
      disabled,
      children,
      paddingLeft,
      id,
      hasBackground
    } = this.props;
    let clsName = this.getClass({
      [align]: align,
      "with-box": hasBox,
      "with-bg": hasBackground,
      active: activeItem != null && activeItem === this.props.id,
      disabled: disabled || menuDisabled
    });
    return clsName;
  }
}