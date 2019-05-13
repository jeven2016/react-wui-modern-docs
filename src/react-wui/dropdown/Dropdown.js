import React from 'react';
import {WindowEventHandler} from '../event';
import Menu from '../menu';
import BaseComponent from '../BaseComponent';
import PropTypes from 'prop-types';
import Title from "./Title";
import {
  DropdownClass,
  DropdownPosition,
  DropdownTriggerType,
  DropdownType
} from "../common/Constants";
import {isNil} from "../Utils";

export default class Dropdown extends BaseComponent {
  static defaultProps = {
    type: 'normal', //simple, button, normal
    triggerBy: 'click', /*trigger showing the menu by click or hover event*/
    onItemClick: null,
    position: "bottomLeft"
  };

  static propTypes = {
    type: PropTypes.oneOf(
        [DropdownType.button, DropdownType.normal, DropdownType.simple]),

  };

  static Title = Title;

  constructor(args) {
    super(args);
    this.dpRef = React.createRef();
    this.clickItem = this.clickItem.bind(this);
    this.clickTitle = this.clickTitle.bind(this);
    this.state = {
      active: false,
    };
  }

  clickItem(itemInfo, evt) {
    console.log(itemInfo);
    let closeMenu = this.onItemClick ? this.onItemClick(itemInfo, evt) : true;
    if (closeMenu) {
      this.setState({active: false});
    }
  }

  clickTitle() {
    const {triggerBy} = this.props;
    if (triggerBy === DropdownTriggerType.hover) {
      return;
    }
    this.setState({
      active: !this.state.active,
    });
  }

  updateChildren() {
    const {children, position} = this.props;
    let positionCls = this.getValue(DropdownPosition, position);
    return React.Children.map(children, child => {
      let childType = child.type;
      if (childType === Menu) {
        return React.cloneElement(child, {
          onClickItem: this.clickItem,
          appendClass: positionCls
        });
      }
      if (childType === Title) {
        return React.cloneElement(child, {
          clickTitle: this.clickTitle
        });
      }
      /*  if (childType === ButtonGroup) {
          return this.handleButtonGroup(child);
        }*/
      return child;
    });
  }

  handleHover(activeMenu) {
    const {triggerBy} = this.props;
    if (triggerBy !== DropdownTriggerType.hover) {
      return;
    }
    this.setState({
      active: activeMenu,
    });
  }

  handleButtonGroup(btnGroup) {
    return React.cloneElement(btnGroup, {
      children: React.Children.map(btnGroup.children, child => {
        if (!isNil(child.getRole()) && child.getRole() === "toggle") {
          return React.cloneElement(child, {
            style: {
              paddingLeft: "3rem"
            }
          });
        }
        return child;
      })
    });
  }

  closeMenu(evt) {
    //ensure the menu won't be closed while clicking title
    let inside = this.dpRef.current.contains(evt.target);
    if (inside) {
      return;
    }
    if (this.state.active) {
      this.setState({
        active: false,
      });
    }
  }

  render() {
    const {
      className,
      type,
      triggerBy,
      onItemClick,
      children,
      position,
      ...otherProps
    } = this.props;

    let dpTypeCls = this.getValue(DropdownClass, type);

    let clsName = this.getClass({
      [dpTypeCls]: dpTypeCls,
      active: this.state.active
    });
    let chd = this.updateChildren(children);

    return (
        <div onMouseEnter={this.handleHover.bind(this, true)}
             onMouseLeave={this.handleHover.bind(this, false)}
             className={clsName}
             ref={this.dpRef}
             {...otherProps}>
          <WindowEventHandler onClick={this.closeMenu.bind(this)}/>
          {chd}
        </div>
    );
  }

}