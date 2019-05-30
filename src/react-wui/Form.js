import React from 'react';
import BaseComponent from './BaseComponent';
import {FormItemType} from './common/Constants';

export default class Form extends BaseComponent {

  static defaultProps = {
    className: 'form',
  };

  static propTypes = {};

  static Item = Item;

  constructor(args) {
    super(args);
    this.state = {};
  }

  render() {
    const {className, type, children, apppendClass, ...otherProps} = this.props;
    const formCls = FormItemType[type];

    let clsName = this.getClass();
    return <>
      <div className={clsName}>
        {children}
      </div>
    </>;

  }

}

class Item extends BaseComponent {
  render() {
    const {className, type, children, apppendClass, ...otherProps} = this.props;
    const formCls = FormItemType[type];
    let clsName = this.getClass({
      [formCls]: formCls,
    });
    return null;
  }
}