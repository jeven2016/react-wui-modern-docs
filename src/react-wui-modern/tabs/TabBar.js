import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import {Spring} from 'react-spring/renderprops';
import {barAnimationConfig, handleProps, reversePosition} from './TabsCommon';

const CardBorderType = {
  none: 'none',
  one: 'one',
  full: 'full',
};

const TabBar = React.forwardRef((props, ref) => {
  const {
    hasBorder,
    isTabCard,
    position,
    isHorizontal,
    isVertical,
    parentRef,
    tabType,
    active,
    cardBorder,
    scrollable,
    internalBarRef,
    ...otherProps
  } = props;

  const tabBarRef = ref ? ref : useRef(null);
  const [config, setConfig] = useState({});
  const barPosition = useMemo(() => reversePosition(position), [position]);
  let barPos = isTabCard ? position : barPosition;

  const barClsName = clsx(`tab-bar`,
      barPos,
      {
        'with-border': hasBorder || cardBorder === CardBorderType.full,
        'one-border': cardBorder === CardBorderType.one,
        horizontal: isHorizontal,
        vertical: isVertical,
        'tab-card': isTabCard,
      });

  const move = () => {
    console.log('move now....');
    const parentNode = parentRef.current;
    const activeItemNode = parentNode.getElementsByClassName('tab-item active');

    if (activeItemNode.length > 0) {
      const tabRect = parentNode.getBoundingClientRect();
      const itemRect = activeItemNode[0].getBoundingClientRect();

      console.log(itemRect);
      const newConfig = barAnimationConfig(config, isTabCard,
          itemRect, tabRect,
          barPosition);
      setConfig(newConfig);
    }
  };

  useImperativeHandle(internalBarRef, () => ({
    updatePosition: move,
  }));

  useEffect(() => {
    move();
  }, [active, barPosition, scrollable, tabType]);

  return <Spring from={config.from} to={config.to}>
    {springProps =>
        <div className={barClsName} ref={tabBarRef} {...otherProps}
             style={handleProps(isTabCard, barPosition,
                 springProps)}/>
    }
  </Spring>;
});

export default TabBar;