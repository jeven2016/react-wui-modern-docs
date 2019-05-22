import React from 'react';
import BaseComponent from "../BaseComponent";
import {TransparentbtnStyle} from "../common/Constants";
import {isNil} from "../Utils";

export default class Toggle extends BaseComponent {
  static defaultProps = {
    className: "toggle",
    type: "normal", // normal, primary,secondary,
    content: null
  };

  constructor(args) {
    super(args);
    this.clickToggle = this.clickToggle.bind(this);
    this.state = {
      active: false
    }
  }

  clickToggle(evt) {
    let newActive = !this.state.active;
    this.setState({
      active: !this.state.active
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
    const {className, appendClass, children, type, content, onChange} = this.props;

    let clsName = this.getClass({
      on: this.state.active,
      off: !this.state.active,
      [type]: type
    });

    return <button style={TransparentbtnStyle} onClick={this.clickToggle}>
      <span className={clsName}>
        <span className="bar">
         {this.getBarContent()}
        </span>
        <span className="ball">
          {this.getBallContent()}
        </span>
      </span>
    </button>
  }
}