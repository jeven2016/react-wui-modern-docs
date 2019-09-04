import React from 'react';
import useElement from '../common/useElement';

const Title = React.forwardRef((props, ref) => useElement(props, ref, 'title'));

export default Title;