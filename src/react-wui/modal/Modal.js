import React, {useRef, useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import {ModalContext} from '../common/Context';
import clsx from 'clsx';
import usePortal from '../common/usePortal';
import useEvent from '../common/UseEvent';
import {EventListener} from '../common/Constants';
import {isNil, placeCenter} from '../Utils';

const Modal = React.forwardRef((props, ref) => {
  const {
    type, className = 'dialog',
    extraClassName, onCancel,
    active, autoClose = true,
    children, alignCenter,
    ...otherProps
  } = props;
  const rootElem = usePortal('wui-modals');
  const modalRef = ref ? ref : useRef(null);

  useEvent(EventListener.keyDown, (e) => {
    //add listener for esc key
    if (active && e.keyCode === 27 && !isNil(onCancel)) {
      onCancel(e);
    }
  });

  useEffect(() => {
    let body = document.body;
    const style = body.getAttribute('style');
    if (!alignCenter || !active) {
      if (!isNil(style)) {
        body.removeAttribute('style');
      }
      return;
    }

    let modelNode = modalRef.current;
    document.body.style.overflow = 'hidden';
    placeCenter(modelNode.childNodes[0], modelNode);
  });

  const clsName = clsx(className, {
    show: active,
    [type]: type,
  });

  const handleCancel = (e) => {
    if (!autoClose || modalRef.current !== e.target) {
      // don't close the modal if clicking the modal body instead of black background
      return;
    }

    if (onCancel) {
      return onCancel(e);
    }
  };

  let contentCls = clsx(extraClassName, 'content');
  let modal = <ModalContext.Provider value={{
    onCancel: onCancel,
  }}>
    <div className={clsName} onClick={handleCancel} ref={modalRef}>
      <div className={contentCls} {...otherProps}
           onClick={() => console.log('onclick')}>
        {children}
      </div>
    </div>
  </ModalContext.Provider>;
  return ReactDOM.createPortal(modal, rootElem);
});

export default Modal;
