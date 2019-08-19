import React from 'react';
import clsx from "clsx";

/**
 * Menu List
 */
const List = React.forwardRef((props, ref) => {
  const {className, extraClassName, children, ...otherProps} = props;
console.log(props);
  let clsName = clsx(extraClassName, className);

  return <ul className={clsName} ref={ref} {...otherProps}>
    {children}
  </ul>;
});

List.defaultProps = {
  className: 'menu-list'
};
export default List;