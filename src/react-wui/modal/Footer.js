import React from 'react';
import BaseComponent from '../BaseComponent';
import {FlexAlign} from '../common/Constants';
import useElement from '../common/useElement';

const Footer = React.forwardRef((props, ref) => {
  const {align, ...otherProps} = props;
  return useElement({...otherProps}, ref, 'footer', {
    [FlexAlign[align]]: align,
  });
});
export default Footer;