import React, {useContext, useRef, useEffect} from 'react';
import Modal from './Modal';
import useElement from '../common/useElement';
import {FlexAlign} from '../common/Constants';
import {ModalContext} from '../common/Context';
import {isNil} from '../Utils';
import Element from '../common/Element';
import Hammer from 'hammerjs';

const Body = React.forwardRef(
    (props, ref) => useElement(props, ref, 'body'));

const Footer = React.forwardRef((props, ref) => {
  const {align, ...otherProps} = props;
  return useElement({...otherProps}, ref, 'footer', {
    [FlexAlign[align]]: align,
  });
});

const Header = React.forwardRef((props, ref) => {
  const {children, className = 'header', ...otherProps} = props;
  const context = useContext(ModalContext);
  const onCancel = context.onCancel;
  const onMove = context.onMove;
  const headerRef = ref ? ref : useRef(null);

  useEffect(() => {
    if (isNil(onMove)) {
      return;
    }
    const mc = new Hammer(headerRef.current);//this ref should reference to header
    mc.get('pan').set({direction: Hammer.DIRECTION_ALL});
    mc.on('pan', (ev) => {
      onMove(ev);
    });

    return ()=>{
      mc.stop();
      mc.destroy();
    }
  },[]);

  let cancelIcon = isNil(onCancel) ? <span>×</span> :
      <span onClick={onCancel}>×</span>;

  return <Element className={className} {...otherProps} ref={headerRef}>
    <div className="title">{children}</div>
    <div className="icon">
      {cancelIcon}
    </div>
  </Element>;
});

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
