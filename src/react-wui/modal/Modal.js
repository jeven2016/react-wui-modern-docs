import React, {useEffect, useRef} from 'react';
import * as ReactDOM from 'react-dom';
import {ModalContext} from '../common/Context';
import clsx from 'clsx';
import usePortal from '../common/usePortal';
import useEvent from '../common/UseEvent';
import {EventListener} from '../common/Constants';
import {isNil} from '../Utils';
import {CSSTransition} from 'react-transition-group';
import {preventEvent} from '../event';

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
  const contentRef = useRef(null);
  let containerRef = useRef(null);

  useEvent(EventListener.keyDown, (e) => {
    //add listener for esc key
    if (active && e.keyCode === 27 && !isNil(onCancel)) {
      onCancel(e);
    }
  });

  useEffect(() => {
    console.log('use effect');
    let body = document.body;
    if (!active) {
      body.removeAttribute('style');
      return;
    }
    document.body.style.overflow = 'hidden';
  }, [active]);

  const clsName = clsx(className,
      alignCenter ? 'align-center' : 'normal',
      {
        [type]: type,
      });

  const handleCancel = (e) => {
    if (!autoClose || contentRef.current.contains(e.target)) {
      preventEvent(e);
      // don't close the modal if clicking the modal body instead of black background
      return;
    }

    if (onCancel) {
      return onCancel(e);
    }
  };

  // ensure the dialog closed after animation finished
  const showDialog = (show) => {
    console.log('css transition');
    if (show) {
      modalRef.current.style.display = 'flex';
    } else {
      modalRef.current.style.display = 'none';
    }
  };

  let contentCls = clsx(extraClassName, 'content');

  let modal = <ModalContext.Provider value={{
    onMove: null,//useMove(containerRef, contentRef),
    onCancel: onCancel,
  }}>
    <>
      <div className={active ? 'mask active' : 'mask inactive'}/>
      <div className={clsName} onClick={handleCancel} ref={modalRef}
           style={{display: 'none'}}>
        <CSSTransition in={active}
                       timeout={300}
            // unmountOnExit
                       onEnter={() => showDialog(true)}
                       onExit={() => showDialog(true)}
                       onExited={() => showDialog(false)}
                       classNames="dialog-container">
          <div className="dialog-container" ref={containerRef}
               onClick={handleCancel}>
            <div className={contentCls} {...otherProps} ref={contentRef}>
              {children}
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  </ModalContext.Provider>;
  return ReactDOM.createPortal(modal, rootElem);
});

export default Modal;
