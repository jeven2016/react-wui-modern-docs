import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import useMounted from '../common/UseMounted';
import {animated, useSpring} from 'react-spring';
import useResizeObserver from '../common/UseResizeObserver';

function initAnimation(collapse, height) {
  const from = {
    opacity: 0,
    height: 0,
    // transform: 'translate3d(0px, 0px, 0px)',
  };
  const to = {
    opacity: collapse ? 0 : 1,
    height: collapse ? 0 : height,
  };
  return {from, to};
}

const CollapsePanel = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    collapse = true,
    className = 'collapse-panel',
    children,
    value,
    style,
    ...otherProps
  } = props;
  const mountRef = useMounted();
  const clsName = clsx(extraClassName, className);
  const panelRef = useRef(null);
  const [panelRect, setPanelRect] = useState({height: 0});

  useResizeObserver(panelRef, rect => setPanelRect({height: rect.height}));

  let {from, to} = initAnimation(collapse, panelRect.height);
  const {height, opacity} = useSpring({from, to});

  let realHeight = height;
  if (!mountRef.current) {
    if (!collapse) {
      realHeight = 'auto';
    }
  }

  const newStyle = {
    ...style,
    height: realHeight,
    opacity: opacity,
  };
  return <animated.div className={clsName}
                       ref={ref}
                       style={newStyle} {...otherProps}>
    <div ref={panelRef}>
      {children}
    </div>
  </animated.div>;
});

export default CollapsePanel;