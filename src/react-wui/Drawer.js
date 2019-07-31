import React from 'react';
import BaseComponent from './BaseComponent';
import Mask from "./Mask";
import {isNil} from "./Utils";

export default class Drawer extends BaseComponent {
  static defaultProps = {
    disabled: false,
    className: 'drawer',
    type: 'normal',
    position: 'left', //left,right,top,bottom
    active: false,
    autoClose: true
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.dwRef = React.createRef();
    this.state = {
      manuallyChanged: false,
      activeDrawer: false
    }
  }

  close(evt) {
    const {autoClose, onClose} = this.props;
    if (!autoClose) {
      return;
    }

    //ensure the menu won't be closed while clicking title
    if (this.dwRef.current.contains(evt.target)) {
      return;
    }
    this.setState({
      activeDrawer: false
    });

    if (!isNil(onClose)) {
      onClose(evt);
    }
  }

  isActive() {
    const {active} = this.props;
    return active;
  }

  render() {
    const {
      type, active, className, width,
      onClose,
      autoClose,
      position, children, ...otherProps
    } = this.props;

    let isActive = this.isActive();
    console.log("isActive=" + isActive);
    let clsName = this.getClass({
      [type]: type,
      [position]: position,
      active: isActive,
      inactive: !isActive
    });
    return (
        <>
          <Mask active={isActive} onClick={this.close.bind(this)}/>
          <div className={clsName} ref={this.dwRef} {...otherProps}>
            {children}
          </div>
        </>
    );
  }

}