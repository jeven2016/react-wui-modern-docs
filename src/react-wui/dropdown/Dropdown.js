import React from 'react';
import {WindowEventHandler} from '../event';
import Menu from '../menu';
import BaseComponent from '../BaseComponent';
import PropTypes from 'prop-types';

export default class Dropdown extends BaseComponent {
  static defaultProps = {
    type: 'normal', //simple, button, normal
    triggerBy: 'click', /*trigger showing the menu by click or hover event*/
    onItemClick: null,

    className: 'dropdown',
    buttonDpClassName: 'button-dropdown',
    textDpClassName: 'simple dropdown',

    hover_id: 'hover',
  };
  static propTypes = {
    type: PropTypes.oneOf(['simple', 'button', 'normal']),

  };

  constructor(args) {
    super(args);
    this.dpRef = React.createRef();
    this.clickItem = this.clickItem.bind(this);
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

  updateChildren() {
    const {children} = this.props;
    return React.Children.map(children, child => {
      let childType = child.type;
      if (childType === Menu) {
        return React.cloneElement(child, {
          onClickItem: this.clickItem,
        });
      }
      return child;
    });
  }

  handleHover(activeMenu) {
    const {triggerBy} = this.props;
    if (triggerBy !== 'hover') {
      return;
    }
    this.setState({
      active: activeMenu,
    });
  }

  render() {
    const {
      className,
      type,
      triggerBy,
      onItemClick,
      children,
    } = this.props;

    let clsName = this.getClass({
      [type]: type,
      active: this.state.active,
      // [triggerBy]: triggerBy,
    });

    return (
        <div onMouseEnter={this.handleHover.bind(this, true)}
             onMouseLeave={this.handleHover.bind(this, false)}
             className={clsName}
             ref={this.dpRef}>
          <WindowEventHandler/>
          {this.updateChildren()}
        </div>
    );
  }
}