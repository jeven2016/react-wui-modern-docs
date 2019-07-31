import React from 'react';
import BaseComponent from './BaseComponent';
import {FormItemType} from './common/Constants';

class Label extends BaseComponent {
  static defaultProps = {
    className: 'label-col',
  };

  render() {
    const {className, type, children, apppendClass, ...otherProps} = this.props;
    let clsName = this.getClass({});
    return <label className={clsName} {...otherProps}>{children}</label>;
  }
}

class Item extends BaseComponent {

  static defaultProps = {
    className: 'form-item',
  };

  render() {
    const {className, type, children, apppendClass, ...otherProps} = this.props;
    const formCls = FormItemType[type];
    let clsName = this.getClass({
      "form-item": "form-item",
      [formCls]: formCls,
    });
    return <div className={clsName} {...otherProps}>{children}</div>;
  }
}

export default class Form extends BaseComponent {

  static defaultProps = {
    className: 'form',
    nativeType: "form"
  };

  static propTypes = {};

  static Item = Item;
  static Label = Label;

  constructor(args) {
    super(args);
    this.state = {};
  }

  render() {
    const {nativeType, className, type, children, apppendClass, ...otherProps} = this.props;
    const formCls = FormItemType[type];

    let clsName = this.getClass();
    let RootElement = nativeType;
    return <RootElement className={clsName} {...otherProps}>
      {children}
    </RootElement>;

  }

}
