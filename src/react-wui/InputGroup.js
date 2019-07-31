import React from 'react';
import clsx from 'clsx';
import PropTypes from "prop-types";

const InputGroup = (props) => {
  const {block, children, className = "input-group", extraClassName, ...otherProps} = props;

  let clsName = clsx(extraClassName, className, {block: block});

  return (
      <div className={clsName} {...otherProps}>
        {children}
      </div>
  );
};

InputGroup.propTypes = {
  block: PropTypes.bool, //whether to occupy the whole row
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
};

InputGroup.Label = (props) => {
  const {className = "label", children, extraClassName, ...otherProps} = props;
  let clsName = clsx(extraClassName, className);

  return <div className={clsName} {...otherProps}>{children}</div>;
};

export default InputGroup;