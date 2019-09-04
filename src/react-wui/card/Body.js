import React from 'react';
import useElement from '../common/useElement';

const Body = React.forwardRef(
    (props, ref) => useElement(props, ref, 'card-body'));
export default Body;