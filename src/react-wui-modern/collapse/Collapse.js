import React from 'react';
import CollapsePanel from './CollapsePanel';
import Item from './Item';
import clsx from 'clsx';
import CollapseContext from './CollapseContext';
import useInternalActive from '../common/useInternalActive';
import {isNil} from '../Utils';

const convertArray = (val) => {
  return isNil(val)
      ? []
      : (Array.isArray(val) ? val : [val]);
};

const Collapse = React.forwardRef((props, ref) => {
  const {
    defaultActive,//Array or single value
    onChange,
    active, //Array or single value
    accordion = false,
    hasBorder = true,
    hasBox = true,
    extraClassName,
    children,
    iconPosition = 'left',
    className = 'collapse',
    ...otherProps
  } = props;
  useInternalActive();
  const clsName = clsx(extraClassName, className, {
    'with-border': hasBorder,
    'global-with-box': hasBox,
  });
  const isExternalCtrl = props.hasOwnProperty('active');
  const {currentActive, setActive} = useInternalActive(isExternalCtrl,
      convertArray(defaultActive), convertArray(active));

  const itemClickHandler = (value, isCollapsed) => {
    if (isExternalCtrl) {
      onChange && onChange(value, isCollapsed);
      return;
    }

    if (isNil(currentActive)) {
      if (!isCollapsed) {
        setActive([value]);
        return;
      }
    }

    if (isCollapsed && currentActive.includes(value)) {
      //collapse the item corresponding to this value
      setActive(pre => currentActive.filter(v => v !== value));
    }
    if (!isCollapsed) {
      if (accordion) {
        setActive([value]);
      } else if (!currentActive.includes(value)) {
        setActive(pre => [...pre, value]);
      }
    }
  };
  console.log(currentActive);

  return <div className={clsName} {...otherProps}>
    <CollapseContext.Provider
        value={{
          accordion,
          isExternalCtrl,
          hasBorder,
          currentActive,
          iconPosition,
          clickItem: itemClickHandler,
        }}>
      {children}
    </CollapseContext.Provider>
  </div>;
});

Collapse.Panel = CollapsePanel;
Collapse.Item = Item;

export default Collapse;