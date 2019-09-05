import React, {useContext} from 'react';
import Modal from './Modal';
import useElement from '../common/useElement';
import {FlexAlign} from '../common/Constants';
import {ModalContext} from '../common/Context';
import {isNil} from 'lodash';
import Element from '../common/Element';

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
  let cancelIcon = isNil(onCancel) ? <span>×</span> :
      <span onClick={onCancel}>×</span>;

  return <Element className={className} {...otherProps}>
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
