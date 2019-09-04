import React from 'react';
import BaseComponent from '../BaseComponent';
import useElement from '../common/useElement';

const Body = React.forwardRef(
    (props, ref) => useElement(props, ref, 'body'));
export default Body;