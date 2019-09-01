import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Menu from '../menu';
import Title from './Title';
import {Active, DropdownTriggerType, EventListener} from '../common/Constants';
import useEvent from '../common/UseEvent';
import {place} from '../Utils';
import usePortal from '../common/usePortal';
import * as ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import {preventEvent} from '../event';

const Dropdown = React.forwardRef((props, ref) => {
  const [dpState, setDpState] = useState({active: Active.na});
  const rootElem = usePortal('portal');
  const dpRef = ref ? ref : useRef(null);
  const menuRef = useRef(null);
  const {
    className = 'dropdown',
    extraClassName,
    type,
    position = 'bottomLeft',
    triggerBy = DropdownTriggerType.click,
    onSelect,
    menuOffset = 5,
    children,
    ...otherProps
  } = props;

  useEvent(EventListener.click, (evt) => {
    setDpState({...dpState, active: Active.na});
  });

  useEffect(() => {
    if (dpState.active === Active.active) {
      place(menuRef.current, dpRef.current, position, menuOffset);
    }
  }, [dpState.active]);

  const getOppositeStatus = (status) => {
    if (status === Active.na) {
      return Active.active;
    }
    return status === Active.active
        ? Active.disactive
        : Active.active;
  };

  const handleSelect = useCallback((item, evt) => {
    //call onSelect
    preventEvent(evt);
  }, []);

  const clickTitle = (evt) => {
    if (triggerBy === DropdownTriggerType.hover) {
      return;
    }

    let status = getOppositeStatus(dpState.active);
    console.log('new status=' + status);
    setDpState({
      ...dpState,
      active: status,
    });

    preventEvent(evt);
  };

  const handleHover = useCallback((active) => {
    if (triggerBy !== DropdownTriggerType.hover) {
      return;
    }
    // setDpState({...dpState, active: active});
  }, [triggerBy]);

  const getMenu = (child) => {

    console.log('active=' + dpState.active);

    let menuContent = ReactDOM.createPortal(
        <CSSTransition in={dpState.active === Active.active}
                       timeout={100}
                       classNames="dropdown-menu">
          <div className="dropdown-menu" ref={menuRef}>
            {
              React.cloneElement(child, {
                onClickItem: handleSelect,
                hasBox: true,
              })}</div>
        </CSSTransition>,
        rootElem);

    return menuContent;
  };

  const updateChildren = () => {
    return React.Children.map(children, child => {
      let childType = child.type;
      if (childType === Menu) {
        return getMenu(child);
      }
      if (childType === Title) {
        return React.cloneElement(child, {
          onClick: clickTitle,
        });
      }
      return child;
    });
  };

  let cls = clsx(extraClassName, className);

  return <div
      ref={dpRef}
      onMouseEnter={() => handleHover(Active.active)}
      onMouseLeave={() => handleHover(Active.disactive)}
      className={cls}>
    {updateChildren()}
  </div>;

});

Dropdown.Title = Title;

export default Dropdown;