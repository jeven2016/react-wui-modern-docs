import React, {Component} from 'react';
import shallowEqual from 'shallowequal';
import {isNil, isObject} from 'lodash';
import classnames from 'classnames';

export default class BaseComponent extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.state === nextState) || !shallowEqual(this.props,
        nextProps);
  }

  getAppendClass() {
    let {appendClass} = this.props;
    if (!isNil(appendClass)) {
      return appendClass;
    }
    return '';
  }

  getClass(data) {
    if (!isNil(data) && !isObject(data)) {
      throw new Error('data is invalid');
    }
    let appendClass = this.getAppendClass();
    let clsName = classnames(appendClass, this.props.className, data);
    return clsName;
  }
}