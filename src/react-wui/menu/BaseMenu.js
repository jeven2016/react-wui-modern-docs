import React, {useState} from 'react';
import {isNil} from "lodash";
import {openMenuType} from "../common/Constants";

export const useMenuList = (props, disabled, defaultOpenFun) => {
  //about manualChang, this variable indicates whether this menu is manually changed by clicking header.
  const [showMenuList, setShowMenuList] = useState(
      {show: true, manualChang: false});

  // handle header
  const handleHeader = (headerInfo, evt) => {
    if (disabled) {
      return;
    }

    // call callback
    let callback = props.onClickHeader;
    let autoCloseMenu = true;
    if (!isNil(callback)) {
      // the menu won't be closed automatically if the callback returns false
      autoCloseMenu = callback(headerInfo, evt);
    }

    //close the menu list automatically if autoCloseMenu is true , undefined or null
    if (isNil(autoCloseMenu) || autoCloseMenu) {
      let finalState = showMenuList.show;
      //if not changed by user clicking
      if (!showMenuList.manualChang && defaultOpenFun) {
        const defaultState = defaultOpenFun();
        if (finalState !== defaultState) {
          finalState = defaultState;
        }
      }

      setShowMenuList(val => {
        return {show: !finalState, manualChang: true}
      });
    }
  };

  return {
    showMenuList,
    handleHeader
  }
};

/**
 * check if this menu is opened by default
 * @param defaultOpenedMenus  'all' or array with ids
 * @param id current menu's id
 * @returns {boolean} current menu is opened by default
 */
export const isDefaultOpen = (defaultOpenedMenus, id) => {
  let openCurrentMenu = false;
  if (defaultOpenedMenus === openMenuType.all
      || (!isNil(id) && defaultOpenedMenus.includes(id))) {
    openCurrentMenu = true;
  }
  return openCurrentMenu;
};

/**
 * check current menu if it should be disabled
 * @param parentDisabled other disabled value passed from react context
 * @param localDisabled whether the disabled value is set in this component
 * @return {boolean}
 */
export const isDisabled = (parentDisabled, localDisabled) =>
    parentDisabled ? parentDisabled : localDisabled;