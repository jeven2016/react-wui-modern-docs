import React, {useState} from 'react';
import {isNil} from "lodash";

const useMenuList = (props, disabled = false) => {
  const [showMenuList, setShowMenuList] = useState(true);

  // handle header
  const handleHeader = (headerInfo, evt) => {
    if (props.disabled || disabled) {
      return;
    }
    // debugger;
    let callback = props.onClickHeader;
    let autoCloseMenu = true;
    if (!isNil(callback)) {
      // the menu won't be closed automatically if the callback returns false
      autoCloseMenu = callback(headerInfo.id, evt);
    }
    //close the menu list automatically if autoCloseMenu is true , undefined or null
    if (isNil(autoCloseMenu) || autoCloseMenu) {
      setShowMenuList(!showMenuList);
    }
  };

  return {
    showMenuList,
    handleHeader
  }
};

export default useMenuList;