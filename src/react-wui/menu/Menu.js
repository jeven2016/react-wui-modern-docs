import React from 'react';
import {isNil, MenuContext} from '../Utils';
import SubMenu from './SubMenu';
import Header from './Header';
import List from './List';
import Item from './Item';
import BaseMenu from './BaseMenu';
import {MenuType} from "../common/Constants";
import PropTypes from 'prop-types';

/**
 * Menu component
 */
export default class Menu extends BaseMenu {
  static defaultProps = {
    className: 'menu',
    disabled: false,
    hasBorder: true,
    hasBox: false,
    hasBackground: false,
    activeItem: null,
    setItemPaddingLeft: true,
    canClose: true, // only for float menu type
    autoCloseFloatSubMenu: true, //automatically close the float menu after clicked the item
    openMenu: ['all'], // menu id array or 'all'
    onClickItem: null,
    onClickHeader: null,
    type: null, //primary, dark, float
    id:null
  };

  static Header = Header;
  static List = List;
  static SubMenu = SubMenu;
  static Item = Item;

  static propTypes = {
    className: PropTypes.string, //the class name of menu
    disabled: PropTypes.bool, //disable this Menu
    hasBorder: PropTypes.bool, //make the menu show borders
    hasBox: PropTypes.bool, //make the menu show a box
    hasBackground: PropTypes.bool, // show a background for menu
    activeItem: PropTypes.string, //the id of a item that is currently selected
    openMenu: PropTypes.array, // an array includes the menu id should open by default, default value is ["all"]
    onClickItem: PropTypes.func, // a callback triggered by clicking a item
    onClickHeader: PropTypes.func, // a callback triggered by clicking a header
    type: PropTypes.oneOf(["primary", "dark", "float"]) // menu type
    // type: PropTypes.arrayOf(["primary", "dark", "float"]) // menu type
  };

  constructor(args) {
    super(args);

    this.state = {
      clickedItem: null,
      showMenuList: true,
    };

    this.menuRef = React.createRef();

    //associate the methods with this Menu instance
    this.handleHeader = this.handleHeader.bind(this);
    this.handleItem = this.handleItem.bind(this);
  }

  componentDidMount() {
    let menuDiv = this.menuRef.current;
    let childNodes = menuDiv.childNodes;

    let index = 1;
    let initValue = 2;
    let unit = "rem";

    const{id}=this.props;
    if(id!=="testMenu"){
      return;
    }
    debugger;
    childNodes.forEach(chd => {
      /* if (!isNil(clsName) && clsName.includes("menu-list")) {
         this.updateItem(chd.childNodes, index, initValue, unit);
         return;
       }*/
      if (chd.className.includes("menu-list")) {
        chd.childNodes.forEach(grandChd => {
          if (grandChd.className.includes("submenu")) {
            this.handleSubMenu(grandChd, index, initValue, unit);
          }
        });
      }
      if (chd.className.includes("submenu")) {
        this.handleSubMenu(chd, index, initValue, unit);
      }
    });
  }

  handleSubMenu(chd, index, initValue, unit) {
    chd.childNodes.forEach(childNode => {
      if (childNode.className.includes("menu-list")) {
        this.updateItem(childNode.childNodes, index + 1, initValue, unit);
      }
    });
  }

  componentDidUpdate() {
  }

  getCurrentActiveIem() {
    let stateItem = this.state.clickedItem;
    let propsItem = this.props.activeItem;

    if (!isNil(stateItem)) {
      return stateItem;
    }
    return propsItem;
  }

  updateChildren(children) {
    const {type} = this.props;
    let chd = React.Children.map(children, child => {
      //pass the click handler to header
      if (child.type === Header) {
        return React.cloneElement(child, {
          clickHeader: this.handleHeader,
        });
      }
      return child;
    });

    if (type === MenuType.float) {
      chd = React.Children.map(children, child => {
        //mark this menu is SubMenu (in top level) and can be folded
        if (child.type === SubMenu) {
          return React.cloneElement(child, {
            isTopSubMenu: true,
          });
        }

        return child;
      });
    }

    return chd;
  }

  render() {
    const {
      block, className, hasBorder, children,
      disabled,
      type,
      onClickHeader,
      onClickItem,
      activeItem,
      canClose,
      openMenu,
      setItemPaddingLeft,
      autoCloseFloatSubMenu,
      hasBox,
      hasBackground,
        id,
      ...otherProps
    } = this.props;

    let clsName = this.getClass({
      'clear-border': !hasBorder,
      "with-box": hasBox,
      "with-bg": hasBackground,
      [type]: type,
      block,
      'close': !this.state.showMenuList,
    });

    let updatedChildren = this.updateChildren(children, type);

    return (
        <MenuContext.Provider
            value={{
              activeItem: this.getCurrentActiveIem(),
              clickItem: this.handleItem,
              openMenu: openMenu,
              menuType: type,
              menuDisabled: disabled,
              autoCloseFloatSubMenu: autoCloseFloatSubMenu
            }}>
          <ul className={clsName} ref={this.menuRef} {...otherProps}>
            {updatedChildren}
          </ul>
        </MenuContext.Provider>
    );
  }

  updateItem(itemNodes, index, initValue, unit) {
    itemNodes.forEach(item => {
      let clsName = item.className;
      item.style.paddingLeft = `${index + initValue}${unit}`;
      item.style.background = "red";
    });
  }
}
