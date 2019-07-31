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
import clsx from "clsx";

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

    extraClassName: PropTypes.string, //the customized class need to add
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
    const {onItemClick} = this.props;
    let closeMenu = onItemClick ? onItemClick(itemInfo, evt) : true;
    if (isNil(closeMenu) || closeMenu) {
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

  closeMenu(evt) {
    //ensure the menu won't be closed while clicking title
    if (this.dpRef.current.contains(evt.target)) {
      return;
    }
    this.state.active && this.setState({
      active: false,
    });

  }

  render() {
    const {
      className,
      extraClassName,
      type,
      triggerBy,
      onItemClick,
      children,
      position,
      ...otherProps
    } = this.props;

    let dpTypeCls = this.getValue(DropdownClass, type);

    let clsName = clsx(extraClassName, className, {
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