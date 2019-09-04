import React from 'react';
import useElement from '../common/useElement';

const Footer = React.forwardRef(
    (props, ref) => useElement(props, ref, 'card-footer'));
export default Footer;