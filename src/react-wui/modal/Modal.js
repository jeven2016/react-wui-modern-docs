import React from 'react';
import BaseComponent from '../BaseComponent';
import * as ReactDOM from 'react-dom';
import {ModalContext, placeCenter} from '../Utils';

export default class Modal extends BaseComponent {
  static defaultProps = {
    className: 'dialog',
    type: 'normal', // simple, primary
    active: null,
    onCancel: null, //close callback,
    autoClose: true,
    alignCenter: false,
  };

  constructor(args) {
    super(args);
    this.cancelModal = this.cancelModal.bind(this);
    this.state = {
      closeModal: false,
    };
    this.modalRef = React.createRef();

    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {alignCenter} = this.props;
    if (alignCenter) {
      this.updatePosition();
    }
  }

  updatePosition() {
    if (this.isActive() && this.props.alignCenter) {
      let modelNode = this.modalRef.current;
      document.body.style.overflow = 'hidden';
      placeCenter(modelNode.childNodes[0], modelNode);
      return;
    }

    let bodyOverflow = document.body.style.overflow;
    if (bodyOverflow === 'hidden') {
      document.body.style.overflow = 'unset';
    }
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.parentNode.removeChild(this.container);
    }
  }

  cancelModal(evt) {
    const {autoClose, onCancel} = this.props;

    if (!autoClose) {
      return;
    }

    if (this.modalRef.current !== evt.target) {
      // don't close the modal if clicking the modal body instead of black background
      return;
    }

    if (onCancel) {
      onCancel(evt);
      return;
    }

    this.setState({
      closeModal: true,
    });

  }

  isActive() {
    const {active} = this.props;
    return this.state.closeMenu ? false : active;
  }

  render() {
    const {type, autoClose, children, onCancel, className, appendClass, active, alignCenter} = this.props;
    let clsName = this.getClass({
      show: this.isActive(),
      [type]: type,
    });

    let modal = <ModalContext.Provider value={{
      onCancel: onCancel,
    }}>
      <div className={clsName} onClick={this.cancelModal} ref={this.modalRef}>
        <div className="content">
          {children}
        </div>
      </div>
    </ModalContext.Provider>;
    return ReactDOM.createPortal(modal, this.container);
  }

}