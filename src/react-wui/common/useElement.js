import React from 'react';
import Element from './Element';

const useElement = (props, ref, defaultClassName) => {
  const {
    className = defaultClassName,
    ...otherProps
  } = props;

  return (
      <Element
          ref={ref}
          className={className}
          {...otherProps}/>
  );
};

export default useElement;