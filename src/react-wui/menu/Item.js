import React from 'react';
import BaseComponent from '../BaseComponent';
import {FloatMenuContext, isNil, MenuContext} from '../Utils';
import PropTypes from 'prop-types';

export default class Item extends BaseComponent {
  static defaultProps = {
    className: 'menu-item',
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
    align: PropTypes.oneOf(['left', 'right']), // align this item to left or right position
  };

  static contextType = MenuContext;

  itemClick(clickItem, clickFloatMenuItem, autoCloseFloatSubMenu, evt) {
    if (!autoCloseFloatSubMenu || this.props.disabled
        || this.context.menuDisabled) {
      return;
    }
    const itemInfo = {
      id: this.props.id,
      value: this.props.value,
      text: !isNil(this.props.text) ? this.props.text : this.props.children,
    };
    let closeMenu = clickItem(itemInfo, evt);

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
      value,
      text,
      ...otherProps
    } = this.props;

    return (
        <MenuContext.Consumer>
          {({activeItem, clickItem, menuDisabled, autoCloseFloatSubMenu}) =>
              <FloatMenuContext.Consumer>
                {({clickFloatMenuItem}) =>
                    <li className={this.getClassName(activeItem, clickItem,
                        menuDisabled)}
                        style={{paddingLeft: paddingLeft}}
                        onClick={this.itemClick.bind(this, clickItem,
                            clickFloatMenuItem, autoCloseFloatSubMenu)}
                        {...otherProps}>
                      {!isNil(text) ? text : children}
                    </li>
                }
              </FloatMenuContext.Consumer>
          }
        </MenuContext.Consumer>
    );
  }

  getClassName(activeItem, clickItem, menuDisabled) {
    console.log('activeItem=' + activeItem);
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
    } = this.props;
    let clsName = this.getClass({
      [align]: align,
      'with-box': hasBox,
      'with-bg': hasBackground,
      active: !isNil(activeItem) && activeItem === this.props.id,
      disabled: disabled || menuDisabled,
    });
    return clsName;
  }
}