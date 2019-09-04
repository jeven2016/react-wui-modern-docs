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
export const RadioGroupContext = React.createContext({});

/**
 * Set padding property for a child node instead of setting margin property
 * @param destComponent
 * @param ctrl
 * @param type
 * @param padding
 */
export const placePadding = (destComponent, ctrl, type, padding = 0) => {
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
    case 'leftTop':
    case 'leftBottom':
      destComponent.style.paddingRight = `${padding}px`;
      break;
    case 'right':
    case 'rightTop':
    case 'rightBottom':
      destComponent.style.paddingLeft = `${padding}px`;
      break;
  }
  place(destComponent, ctrl, type, 0);
};

//todo: transform : left , right not working
export const setTransformOrigin = (destComponent, type) => {
  let origin = 'center';
  switch (type) {
    case 'bottom':
    case 'bottomLeft':
    case 'bottomRight':
      origin = 'top';
      break;
    case 'top':
    case 'topLeft':
    case 'topRight':
      origin = 'bottom';
      break;
    case 'left':
      origin = 'right center';
      break;
    case 'leftTop':
      origin = 'right bottom';
      break;
    case 'leftBottom':
      origin = 'right top';
      break;
    case 'right':
      origin = 'left center';
      break;
    case 'rightTop':
      origin = 'left bottom';
      break;
    case 'rightBottom':
      origin = 'left top';
      break;
  }

  destComponent.style.transformOrigin = origin;
};

/**
 * place a component to somewhere
 */
export const place = (dest, ctrl, type, offset = 0) => {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset
      || document.body.scrollTop;
  var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset
      || document.body.scrollLeft;

  var pos = ctrl.getBoundingClientRect();
  if (type === 'bottom') {
    dest.style.left = scrollLeft + (pos.left
        - (dest.offsetWidth
            - ctrl.offsetWidth)
        / 2) + 'px';
    dest.style.top = (pos.bottom + offset) + scrollTop + 'px';
  }

  if (type === 'top') {
    dest.style.left = scrollLeft + (pos.left
        - (dest.offsetWidth
            - ctrl.offsetWidth)
        / 2) + 'px';
    dest.style.top = (pos.top - dest.offsetHeight
        - offset)
        + scrollTop + 'px';
  }

  if (type === 'left') {
    dest.style.left = scrollLeft + pos.left - dest.offsetWidth
        - offset + 'px';
    dest.style.top = pos.top - (dest.offsetHeight
        - ctrl.offsetHeight) / 2
        + scrollTop
        + 'px';
  }

  if (type === 'leftTop') {
    dest.style.left = scrollLeft + pos.left - dest.offsetWidth
        - offset + 'px';
    dest.style.top = pos.top + scrollTop - dest.offsetHeight
        + pos.height + 'px';
  }

  if (type === 'leftBottom') {
    dest.style.left = scrollLeft + pos.left - dest.offsetWidth
        - offset + 'px';
    dest.style.top = pos.top + scrollTop + 'px';
  }

  if (type === 'right') {
    dest.style.left = scrollLeft + pos.right + offset + 'px';
    dest.style.top = pos.top - (dest.offsetHeight
        - ctrl.offsetHeight) / 2
        + scrollTop
        + 'px';
  }

  if (type === 'rightTop') {
    dest.style.left = scrollLeft + pos.right + offset + 'px';
    dest.style.top = pos.top + scrollTop - dest.offsetHeight
        + pos.height + 'px';
  }

  if (type === 'rightBottom') {
    dest.style.left = scrollLeft + pos.right + offset + 'px';
    dest.style.top = pos.top + scrollTop + 'px';
  }

  if (type === 'topLeft') {
    dest.style.left = scrollLeft + pos.left + 'px';
    dest.style.top = pos.top - dest.offsetHeight - offset
        + scrollTop
        + 'px';
  }

  if (type === 'topRight') {
    dest.style.left = scrollLeft + pos.right
        - dest.offsetWidth + 'px';
    dest.style.top = pos.top - dest.offsetHeight - offset
        + scrollTop
        + 'px';
  }

  if (type === 'bottomLeft') {
    dest.style.left = scrollLeft + pos.left + 'px';
    dest.style.top = pos.bottom + offset
        + scrollTop
        + 'px';
  }

  if (type === 'bottomRight') {
    dest.style.left = scrollLeft + pos.right
        - dest.offsetWidth + 'px';
    dest.style.top = pos.bottom + offset
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
