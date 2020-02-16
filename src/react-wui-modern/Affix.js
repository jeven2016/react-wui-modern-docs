import React from 'react';
import {isNil} from './Utils';

const Affix = React.forwardRef((props, ref) => {

  const {
    className = 'affix affix-fixed',
    top,
    bottom,
    style,
    ...otherProps
  } = props;

  const newStyle = {...style};
  if (!isNil(top)) {
    newStyle.top = top;
  }
  if (!isNil(bottom)) {
    newStyle.bottom = bottom;
  }

  return <div className={className} style={newStyle} {...otherProps}/>;
});

export default Affix;