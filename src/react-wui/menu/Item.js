import React from 'react';
import BaseComponent from '../BaseComponent';
import {FloatMenuContext, MenuContext} from "../Utils";
import PropTypes from "prop-types";

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'item',
    hasBox: false,
    hasBackground: false,
    disabled: false,
    align: null, //left or right
  };

  static propsType = {
    className: PropTypes.string,
    hasBox: PropTypes.bool, //make the item show a box
    hasBackground: PropTypes.bool, // show a background for menu items
    disabled: PropTypes.bool, //disable this Menu
    align: PropTypes.oneOf(["left", "right"]), // align this item to left or right position
  };

  static contextType = MenuContext;

  itemClick(clickItem, clickFloatMenuItem, evt) {
    if (this.props.disabled || this.context.menuDisabled) {
      return;
    }
    let closeMenu = clickItem(this.props.id, evt);
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
      hasBackground,
      ...otherProps
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
                            clickFloatMenuItem)}
                        {...otherProps}>
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