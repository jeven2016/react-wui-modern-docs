import React, {Component} from 'react';
import shallowEqual from 'shallowequal';
import * as Utils from './Utils';
import clsx from 'clsx';

export default class BaseComponent extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.state === nextState) || !shallowEqual(this.props,
        nextProps);
  }

  getAppendClass() {
    let {appendClass} = this.props;
    if (!Utils.isNil(appendClass)) {
      return appendClass;
    }
    return '';
  }

  static getUtils() {
    return Utils;
  }

  utils() {
    return Utils;
  }

  getClass(data) {
    if (!Utils.isNil(data) && !Utils.isObject(data)) {
      throw new Error('data is invalid');
    }
    let appendClass = this.getAppendClass();
    let clsName = clsx(appendClass, this.props.className, data);
    return clsName;
  }

  getValue(Class, property) {
    let existed = Class.hasOwnProperty(property);
    if (!existed) {
      throw new Error(`the property(${property}) is invalid.`);
    }
    return Class[property];
  }
}