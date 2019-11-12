import React, {useEffect, useRef, useState} from 'react';
import NormalMenu from './NormalMenu';
import Header from './Header';
import List from './List';
import SubMenu from './SubMenu';
import Item from './Item';

const Menu = React.forwardRef((props, ref) => {
  const {multiLevelMenus, ...otherProps} = props;

  if (multiLevelMenus) {
  } else {
    return <NormalMenu {...otherProps}/>;
  }

});

Menu.Header = Header;
Menu.List = List;
Menu.SubMenu = SubMenu;
Menu.Item = Item;

export default Menu;