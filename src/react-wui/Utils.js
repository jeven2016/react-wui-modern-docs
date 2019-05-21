import React from 'react';
import {MenuType} from "./common/Constants";

export const isArray = (value) => {
  // return Object.prototype.toString.call(value) === "[object Array]";
  return Array.isArray(value);
};

//split the class by blank space
const _splitClassName = (className) => {
  if (!className) {
    return [];
  }
  return className.split(' ');
};

/**
 * Check if the element has a specified class
 * @param elem
 * @param classNameOrArray a single class or an array of classes
 * @param clsArray
 * @return array
 */
export const hasClass = (elem, classNameOrArray, clsArray/*optional*/) => {
  if (!classNameOrArray) {
    return false;
  }

  if (!clsArray) {
    clsArray = _splitClassName(elem.props.className);
  }
  if (isArray(classNameOrArray)) {
    let result = clsArray.find(cls => classNameOrArray.includes(cls));
    if (result) {
      return true;
    }
    return false;
  } else {
    return clsArray.includes(classNameOrArray);
  }
};

export const appendClassIfAbsent = (elem, className) => {
  if (!hasClass(elem, className)) {
    return `${elem.props.className} ${className}`;
  }
  return elem.props.className;
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

///////////////////////////////////////

export {isNil, isObject} from 'lodash';

// https://github.com/facebook/react/issues/13969
// context should be placed in a individual file
export const MenuContext = React.createContext({});
export const FloatMenuContext = React.createContext({});

export const NavbarContext = React.createContext({});
export const ModalContext = React.createContext({});

export const isFloatMenu = (type) => {
  return type === MenuType.float;
};

/**
 * place a component to somewhere
 */
export const place = (destComponent, ctrl, type, topOffset = 0) => {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset
      || document.body.scrollTop;
  var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset
      || document.body.scrollLeft;

  var pos = ctrl.getBoundingClientRect();
  if (type === 'bottom') {
    destComponent.style.left = scrollLeft + (pos.left
        - (destComponent.offsetWidth
            - ctrl.offsetWidth)
        / 2) + 'px';
    destComponent.style.top = (pos.bottom + topOffset) + scrollTop + 'px';
  }

  if (type === 'top') {
    destComponent.style.left = scrollLeft + (pos.left
        - (destComponent.offsetWidth
            - ctrl.offsetWidth)
        / 2) + 'px';
    destComponent.style.top = (pos.top - destComponent.offsetHeight
        - topOffset)
        + scrollTop + 'px';
  }

  if (type === 'left') {
    destComponent.style.left = scrollLeft + pos.left - destComponent.offsetWidth
        - topOffset + 'px';
    destComponent.style.top = pos.top - (destComponent.offsetHeight
        - ctrl.offsetHeight) / 2
        + scrollTop
        + 'px';
  }

  if (type === 'right') {
    destComponent.style.left = scrollLeft + pos.right + topOffset + 'px';
    destComponent.style.top = pos.top - (destComponent.offsetHeight
        - ctrl.offsetHeight) / 2
        + scrollTop
        + 'px';
  }

  if (type === 'topLeft') {
    destComponent.style.left = scrollLeft + pos.left + 'px';
    destComponent.style.top = pos.top - destComponent.offsetHeight - topOffset
        + scrollTop
        + 'px';
  }

  if (type === 'topRight') {
    destComponent.style.left = scrollLeft + pos.right
        - destComponent.offsetWidth + 'px';
    destComponent.style.top = pos.top - destComponent.offsetHeight - topOffset
        + scrollTop
        + 'px';
  }

  if (type === 'bottomLeft') {
    destComponent.style.left = scrollLeft + pos.left + 'px';
    destComponent.style.top = pos.bottom + topOffset
        + scrollTop
        + 'px';
  }

  if (type === 'bottomRight') {
    destComponent.style.left = scrollLeft + pos.right
        - destComponent.offsetWidth + 'px';
    destComponent.style.top = pos.bottom + topOffset
        + scrollTop
        + 'px';
  }
};

export const placeCenter = (destComponent, ctrl) => {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset
      || document.body.scrollTop;

  var ctrlPos = ctrl.getBoundingClientRect();
  var destPos = destComponent.getBoundingClientRect();

  let destAvaliableHeight = Math.max(destPos.height,
      destComponent.offsetHeight);

  console.log(scrollTop + "," + ctrlPos.height + "," + destAvaliableHeight)
  destComponent.style.top = Math.floor(
      (ctrlPos.height - destAvaliableHeight) / 2) + "px";
  destComponent.style.margin = "0 auto";

};

