import React from 'react';

export const TabsContext = React.createContext();

export const reversePosition = (position) => {
  let barPos;
  switch (position) {
    case 'top':
      barPos = 'bottom';
      break;
    case 'bottom':
      barPos = 'top';
      break;
    case 'left':
      barPos = 'right';
      break;
    case 'right':
      barPos = 'left';
      break;
  }
  return barPos;
};

export const barAnimationConfig = (config, isTabCard, itemRect, tabRect,
                                   barPosition) => {
  let to, tabCardTo = {};
  if (isTabCard) {
    tabCardTo = {
      width: itemRect.width + 'px',
      height: itemRect.height + 'px',
    };
  }
  switch (barPosition) {
    case 'top':
    case 'bottom':
      to = {
        width: itemRect.width + 'px',
        left: (itemRect.left - tabRect.left) + 'px',
      };
      break;

    case 'left':
    case 'right':
      to = {
        height: itemRect.height + 'px',
        top: (itemRect.top - tabRect.top) + 'px',
      };
      break;

  }

  return {
    from: config.to ? config.to : {},
    to: {...to, ...tabCardTo},
  };
};

export const handleProps = (isTabCard, barPosition, styleProps) => {
  if (barPosition === 'top' || barPosition === 'bottom') {
    if (!isTabCard) {
      delete styleProps.height;
    }
    delete styleProps.top;
  }
  if (barPosition === 'left' || barPosition === 'right') {
    if (!isTabCard) {
      delete styleProps.width;
    }
    delete styleProps.left;
  }
  return styleProps;
};

export function nextPosition({tabCntRect, scrlRect, against, orientation, axis, setDisabled}) {
  const rest = scrlRect[against] + scrlRect[axis] - tabCntRect[axis];
  let to, move = tabCntRect[against];
  if (rest >= move) {
    const offset = scrlRect[orientation] - move;
    if (offset < tabCntRect[orientation]) {
      move -= tabCntRect[orientation] - offset;
      setDisabled(true);
    }
    to = scrlRect[axis] - tabCntRect[axis] - move;
  } else {
    to = -rest - tabCntRect[against];
  }
  return to;
}

export function prePosition({tabCntRect, scrlRect, against, axis}) {
  const rest = tabCntRect[axis] - scrlRect[axis];
  let to;
  if (rest < tabCntRect[against]) {
    to = 0;
  } else {
    to = scrlRect[axis] + tabCntRect[against] - tabCntRect[axis];
  }
  return to;
}