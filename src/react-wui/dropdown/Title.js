import React from 'react';
import useElement from '../common/useElement';
import useMultipleRefs from '../common/UseMultipleRefs';

const DisabledStyle = {
  cursor: 'not-allowed',
  opacity: '.7',
};

const EnabledStyle = {
  cursor: 'pointer',
  color: '#007aff',
};

const Title = React.forwardRef((props, ref) => {
  const {directRef, ...otherProps} = props;
  const multipleRef = useMultipleRefs(ref, directRef);
  return useElement({nativeType: 'span', ...otherProps},
      multipleRef, null, null,
      props.disabled ? DisabledStyle : EnabledStyle);
});

export default Title;