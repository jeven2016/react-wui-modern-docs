import React, {useCallback, useRef, useState} from 'react';
import clsx from 'clsx';
import Items from './Items';
import Panels from './Panels';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import {TabsContext} from './TabsCommon';
import useInternalActive from '../common/useInternalActive';
import {Direction} from '../common/Constants';
import {isNil} from '../Utils';
import TabBar from './TabBar';
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
} from '../Icons';
import {Spring} from 'react-spring/renderprops';
import NextBtn from './NextBtn';
import PreBtn from './PreBtn';

const Tabs = React.forwardRef((props, ref) => {
  const {
    defaultActive,
    active,
    onChange,

    className = 'tab',
    extraClassName,
    position = 'top', //top, bottom, left, right
    hasBorder = true,
    cardBorder = 'full', //none, one, full

    type = 'normal', //card, secondary-card, normal
    scrollable = false,
    children,
    ...otherProps
  } = props;

  const direction = position === 'top' || position === 'bottom'
      ? Direction.horizontal
      : Direction.vertical;
  const tabRef = ref ? ref : useRef(null);
  const scrollRef = useRef(null);
  const tabCntRef = useRef(null);
  const internalBarRef = useRef(null);

  const isHorizontal = direction === Direction.horizontal;
  const isVertical = direction === Direction.vertical;
  const isSecondaryCard = type === 'secondaryCard';
  const isTabCard = type === 'card';
  const hasTabBar = hasBorder && !isSecondaryCard;

  const [scrlSpringConfig, setScrlSpringConfig] = useState({
    from: {transform: 'translate3d(0px, 0px, 0px)'},
    to: {transform: 'translate3d(0px, 0px, 0px)'},
  });

  console.log('type=' + type);

  const clsName = clsx(extraClassName, className, direction,
      position, {
        'tab-card': isTabCard,
        'tab-card secondary-card': isSecondaryCard,
        'with-border': hasBorder,
        scrollable,
      });

  const getFirstValue = useCallback(() => {
    React.Children.forEach(children, child => {
      if (child.type === Items) {
        const itemsArray = React.Children.toArray(child.props.children);
        if (itemsArray.length > 0 && itemsArray[0].type === TabItem) {
          return itemsArray[0].props.value;
        }
      }
    });
  }, children);

  const backupActive = isNil(defaultActive) && isNil(active)
      ? getFirstValue()
      : null;
  const isExternalControl = props.hasOwnProperty('active');
  const {currentActive, setActive} = useInternalActive(isExternalControl,
      defaultActive, active, backupActive);

  const childArray = children ? React.Children.toArray(children) : [];
  const tabItems = childArray.filter(chd => chd.type === Items);
  const tabPanels = childArray.filter(chd => chd.type === Panels);

  const change = (value) => {
    if (!isExternalControl) {
      setActive(value);
    }
    onChange && onChange(value);
  };

  const scrollPre = () => {

  };

  const preBtn = scrollable ? <div className={`tab-pre ${direction}`}
                                   onClick={scrollPre}>
        {isHorizontal ? <IconArrowLeft/> : <IconArrowUp/>}
      </div>
      : null;

  const tabBarContent = !isSecondaryCard && <TabBar
      tabType={type}
      internalBarRef={internalBarRef}
      scrollable={scrollable}
      hasBorder={hasBorder}
      cardBorder={cardBorder}
      isTabCard={isTabCard}
      position={position}
      isHorizontal={isHorizontal}
      isVertical={isVertical}
      parentRef={scrollRef}
      active={currentActive}/>;
  const scrollContent = scrollable ? <Spring
          from={scrlSpringConfig.from}
          to={scrlSpringConfig.to}>
        {
          sp =>
              <div className={`tab-scroll ${direction}`} ref={scrollRef}
                   style={sp}>
                {tabItems}
                {tabBarContent}
              </div>
        }
      </Spring>
      : <div className={`tab-scroll ${direction}`} ref={scrollRef}>
        {tabItems}
        {tabBarContent}
      </div>;

  return <>
    <TabsContext.Provider value={{
      active: currentActive,
      change,
      autoChange: !isExternalControl,
    }}>
      <div className={`tabs ${position}`}>
        <div className={clsName} {...otherProps} ref={tabRef}>
          {
            scrollable && <PreBtn scrollRef={scrollRef} tabCntRef={tabCntRef}
                                  scrlSpringConfig={scrlSpringConfig}
                                  isVertical={isVertical}
                                  direction={direction}
                                  internalBarRef={internalBarRef}
                                  setScrlSpringConfig={setScrlSpringConfig}/>
          }
          {
            scrollable && <NextBtn scrollRef={scrollRef} tabCntRef={tabCntRef}
                                   scrlSpringConfig={scrlSpringConfig}
                                   isVertical={isVertical}
                                   direction={direction}
                                   internalBarRef={internalBarRef}
                                   setScrlSpringConfig={setScrlSpringConfig}/>
          }
          <div className={`tab-container ${position}`} ref={tabCntRef}>
            {scrollContent}
          </div>
        </div>
        {tabPanels}
      </div>
    </TabsContext.Provider>
  </>;
});

Tabs.Items = Items;
Tabs.Panels = Panels;
Tabs.TabItem = TabItem;
Tabs.TabPanel = TabPanel;

export default Tabs;