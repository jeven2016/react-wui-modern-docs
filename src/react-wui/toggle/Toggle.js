import React from 'react';
import BaseComponent from '../BaseComponent';
import {TransparentbtnStyle} from '../common/Constants';
import {isNil} from '../Utils';

export default class Toggle extends BaseComponent {
  static defaultProps = {
    className: 'toggle',
    type: 'normal', // normal, primary,secondary,
    content: null,
    disabled: false,
    turnOn: false,
  };

  constructor(args) {
    super(args);
    this.clickToggle = this.clickToggle.bind(this);
    this.state = {
      active: false,
      manuallyChanged: false,//whether the status is manually changed
    };
  }

  clickToggle(evt) {
    const {disabled, turnOn} = this.props;
    if (disabled) {
      return;
    }
    let newActive = !this.state.active;
    this.setState({
      manuallyChanged: true,
      active: this.state.manuallyChanged ? !this.state.active : !turnOn,
    });

    const {onChange} = this.props;
    !isNil(onChange) && onChange(newActive, evt);
  }

  getBarContent() {
    const {content} = this.props;
    if (isNil(content) || !content.showInBar) {
      return null;
    }
    return this.state.active ? content.on : content.off;
  }

  getBallContent() {
    const {content} = this.props;
    if (isNil(content) || content.showInBar) {
      return null;
    }
    return this.state.active ? content.on : content.off;
  }

  render() {
    const {turnOn, disabled, className, appendClass, children, type, content, onChange, ...otherProps} = this.props;

    let isOnStatus = this.state.manuallyChanged ? this.state.active :
        turnOn;
    let clsName = this.getClass({
      on: isOnStatus,
      off: !isOnStatus,
      disabled: disabled,
      [type]: type,
    });

    return <button style={TransparentbtnStyle}
                   onClick={this.clickToggle} {...otherProps}>
      <span className={clsName}>
        <span className="bar">
         {this.getBarContent()}
        </span>
        <span className="ball">
          {this.getBallContent()}
        </span>
      </span>
    </button>;
  }
}