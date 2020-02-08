import React, {useContext} from 'react';
import clsx from 'clsx';
import {TabsContext} from './TabsCommon';
import {isNil} from '../Utils';

const TabItem = React.forwardRef((props, ref) => {
  const {
    className = 'tab-item',
    extraClassName,
    children,
    value,
    ...otherProps
  } = props;
  const context = useContext(TabsContext);
  const activeItem = !isNil(value) && value === context.active;
  const clsName = clsx(extraClassName, className, {active: activeItem});

  return <div className={clsName}
              ref={ref}
              onClick={() => context.change(value)}
              {...otherProps}>
    {children}
  </div>;
});

export default TabItem;