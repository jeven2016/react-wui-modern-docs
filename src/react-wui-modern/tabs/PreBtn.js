import React, {useEffect, useState} from 'react';
import {IconArrowLeft, IconArrowUp} from '../Icons';
import clsx from 'clsx';
import {prePosition} from './TabsCommon';
import {execute} from '../Utils';

function goLeft({tabCntRect, scrlRect, setDisabled, scrlSpringConfig}) {
  const to = prePosition({
    tabCntRect,
    scrlRect,
    against: 'width',
    axis: 'x',
  });
  return {
    ...scrlSpringConfig,
    to: {transform: `translate3d(${to}px, 0px, 0px)`},
  };
}

function goUp(
    {tabCntRect, scrlRect, setDisabled, scrlSpringConfig}) {
  const to = prePosition({
    tabCntRect,
    scrlRect,
    against: 'height',
    axis: 'y',
  });
  return {
    ...scrlSpringConfig,
    to: {transform: `translate3d(0px, ${to}px, 0px)`},
  };
}

const PreBtn = React.forwardRef((props, ref) => {
  const {
    className = 'tab-pre',
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
        goUp({
          tabCntRect: tabCntRect,
          scrlRect: scrlRect,
          setDisabled: setDisabled,
          scrlSpringConfig: scrlSpringConfig,
        })
        : goLeft({
          tabCntRect: tabCntRect,
          scrlRect: scrlRect,
          setDisabled: setDisabled,
          scrlSpringConfig: scrlSpringConfig,
        });
    setScrlSpringConfig(translateTo);
   /* execute(() => {
      internalBarRef.current && internalBarRef.current.updatePosition();
    }, 500);*/
  };

  const clsName = clsx(className, direction, {disabled: disabled});
  return visible && <div className={clsName} onClick={scrollNext}>
    {isVertical ? <IconArrowUp/> : <IconArrowLeft/>}
  </div>;
});

export default PreBtn;