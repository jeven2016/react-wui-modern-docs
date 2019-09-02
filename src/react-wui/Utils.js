import React, {useContext} from 'react';
import {MenuType} from './common/Constants';
import clsx from 'clsx';

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

///////////////////////////////////////
export {isNil, isObject, inRange, isInteger, isString, isBoolean} from 'lodash';
///////////////////////////////////////

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const NavbarContext = React.createContext({});
export const ModalContext = React.createContext({});
export const RadioGroupContext = React.createContext({});

export const placePadding = (destComponent, ctrl, type, padding = 0) => {
  place(destComponent, ctrl, type, 0);

  switch (type) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
      destComponent.style.paddingTop = `${padding}px`;
      break;
    case 'top':
    case 'topLeft':
    case 'topRight':
      destComponent.style.paddingBottom = `${padding}px`;
      break;
    case 'left':
      destComponent.style.paddingRight = `${padding}px`;
      break;
    case 'right':
      destComponent.style.paddingLeft = `${padding}px`;
      break;
  }
};

export const setTransformOrigin = (destComponent, type) => {
  switch (type) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
      destComponent.style.transformOrigin = `top`;
      break;
    case 'top':
    case 'topLeft':
    case 'topRight':
      destComponent.style.transformOrigin = `bottom`;
      break;
    case 'left':
      destComponent.style.paddingRight = `right`;
      break;
    case 'right':
      destComponent.style.paddingLeft = `left`;
      break;
  }
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

  console.log(scrollTop + ',' + ctrlPos.height + ',' + destAvaliableHeight);
  destComponent.style.top = Math.floor(
      (ctrlPos.height - destAvaliableHeight) / 2) + 'px';
  destComponent.style.margin = '0 auto';

};

export const validate = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};
