import React, {useEffect, useRef} from 'react';
import * as ReactDOM from 'react-dom';
import {ModalContext} from '../common/Context';
import clsx from 'clsx';
import usePortal from '../common/usePortal';
import useEvent from '../common/UseEvent';
import {Active, EventListener} from '../common/Constants';
import {isNil, placeCenter} from '../Utils';
import Hammer from 'hammerjs';
import {CSSTransition} from 'react-transition-group';

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
  console.log('render.................');
  const posRef = useRef({lastX: 0, lastY: 0});
  const handleMove = (ev) => {
    let cnt = contentRef.current;

    console.log(`left=${cnt.style.left},top=${cnt.style.top}`);
    let posX = ev.deltaX + cnt.style.left;
    let posY = ev.deltaY + cnt.style.top;
    console.log(`deltaX=${ev.deltaX},deltaY=${ev.deltaY}`);
    console.log(`lastX=${posX},lastY=${posY}`);
    console.log('');
    // posRef.current = {lastX: posX, lastY: posY};

    cnt.style.left = posX + 'px';
    cnt.style.top = posY + 'px';
  };

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

  let content = <div className={contentCls} {...otherProps} ref={contentRef}>
    {children}
  </div>;
  if (alignCenter) {
    content = <CSSTransition in={active}
                             timeout={200}
                             classNames="content">
      <div className={contentCls} {...otherProps} ref={contentRef}>
        {children}
      </div>
    </CSSTransition>;
  }

  let modal = <ModalContext.Provider value={{
    onMove: handleMove,
    onCancel: onCancel,
  }}>
    <div className={clsName} onClick={handleCancel} ref={modalRef}>
      {content}
    </div>
  </ModalContext.Provider>;
  return ReactDOM.createPortal(modal, rootElem);
});

export default Modal;
