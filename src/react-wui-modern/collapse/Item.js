import React, {useContext, useState, useMemo} from 'react';
import CollapsePanel from './CollapsePanel';
import Card from '../card/Card';
import {isNil} from '../Utils';
import CollapseContext from './CollapseContext';
import {IconArrowRight, IconList} from '../Icons';
import clsx from 'clsx';

const Item = React.forwardRef((props, ref) => {
  const {
    children,
    header,
    value,
    hasBackground = false,
    ...otherProps
  } = props;
  const activeContext = useContext(CollapseContext);
  const currentActive = activeContext.currentActive;

  const isCollapsed = useMemo(() => {
    if (!isNil(currentActive) && !isNil(value)) {
      return !currentActive.includes(value);
    }
    return true;
  }, [value, currentActive]);

  const clickHeader = () => {
    if (isNil(value)) {
      return;
    }
    activeContext.clickItem(value, !isCollapsed);
  };

  const innerClsName = clsx('inner', {
    'left-icon-column': activeContext.iconPosition === 'left',
    'right-icon-column': activeContext.iconPosition === 'right',
  });

  return <>
    <Card block {...otherProps}
          hasBorder={activeContext.hasBorder}
          hasBox={false}>
      <Card.Header
          extraClassName={`collapse-header ${isCollapsed ? 'collapsed' : ''}`}
          hasBackground={hasBackground}
          onClick={clickHeader}>
        <div className="header-row">
          <div className={innerClsName}>
            <div className={`icon-column ${isCollapsed ? '' : 'expand'}`}>
              <IconArrowRight/>
            </div>
            <div className="header-info">
              {header}
            </div>
          </div>
        </div>

      </Card.Header>
      <CollapsePanel value={value} collapse={isCollapsed}>
        {children}
      </CollapsePanel>
    </Card>
  </>;
});

export default Item;