import React, {useContext} from 'react';
import BaseComponent from '../BaseComponent';
import {isNil} from '../Utils';
import {ModalContext} from './ModalBase';
import Element from '../common/Element';

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
export default Header;