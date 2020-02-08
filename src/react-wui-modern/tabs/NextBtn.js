import React, {useEffect, useState} from 'react';
import {IconArrowDown, IconArrowRight} from '../Icons';
import clsx from 'clsx';
import {nextPosition} from './TabsCommon';

function goRight({tabCntRect, scrlRect, setDisabled, scrlSpringConfig}) {
  const to = nextPosition({
    tabCntRect,
    scrlRect,
    against: 'width',
    orientation: 'right',
    axis: 'x',
  });
  return {
    ...scrlSpringConfig,
    to: {transform: `translate3d(${to}px, 0px, 0px)`},
  };
}

function goDown(
    {tabCntRect, scrlRect, setDisabled, scrlSpringConfig}) {
  const to = nextPosition({
    tabCntRect,
    scrlRect,
    against: 'height',
    orientation: 'bottom',
    axis: 'y',
  });
  return {
    ...scrlSpringConfig,
    to: {transform: `translate3d(0px, ${to}px, 0px)`},
  };
}

const NextBtn = React.forwardRef((props, ref) => {
  const {
    className = 'tab-next',
    scrollRef,
    tabCntRef,
    scrlSpringConfig,
    setScrlSpringConfig,
    isVertical,
    direction,
    internalBarRef,
  } = props;

  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const scrlRect = scrollRef.current.getBoundingClientRect();
    const tabCntRect = tabCntRef.current.getBoundingClientRect();

    if (scrlRect.right <= tabCntRect.right) {
      // visible && setVisible(false);
    }
  });

  const scrollNext = () => {
    if (disabled) {
      return;
    }
    const scrlRect = scrollRef.current.getBoundingClientRect();
    const tabCntRect = tabCntRef.current.getBoundingClientRect();

    let translateTo;
    translateTo = isVertical ?
        goDown({
          tabCntRect: tabCntRect,
          scrlRect: scrlRect,
          setDisabled: setDisabled,
          scrlSpringConfig: scrlSpringConfig,
        })
        : goRight({
          tabCntRect: tabCntRect,
          scrlRect: scrlRect,
          setDisabled: setDisabled,
          scrlSpringConfig: scrlSpringConfig,
        });
    setScrlSpringConfig(translateTo);
  };

  const clsName = clsx(className, direction, {disabled: disabled});
  return visible && <div className={clsName} onClick={scrollNext}>
    {isVertical ? <IconArrowDown/> : <IconArrowRight/>}
  </div>;
});

export default NextBtn;