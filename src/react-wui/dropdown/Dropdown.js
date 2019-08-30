import React, {useCallback, useEffect, useRef, useState} from 'react';
import clsx from "clsx";
import Menu from "../menu";
import Title from "./Title";
import {DropdownTriggerType, EventListener} from "../common/Constants";
import useEvent from "../common/UseEvent";

const Dropdown = React.forwardRef((props, ref) => {
  const [dpState, setDpState] = useState({active: false});
  const dpRef = ref ? ref : useRef(null);
  const {
    className = "dropdown",
    extraClassName,
    type,
    triggerBy,
    onSelect,
    children,
    position,
    ...otherProps
  } = props;

  useEvent(EventListener.click, (evt) => {
    // let inside = forwardRef.current.contains(evt.target);
    setDpState({...dpState, active: false});
  });

  useEffect(() => {

  });

  const handleSelect = useCallback((item, evt) => {
    //call onSelect
  }, []);

  const handleHover = useCallback((active) => {
    if (triggerBy !== DropdownTriggerType.hover) {
      return;
    }
    setDpState({...dpState, active: active});
  }, [triggerBy]);

  const updateChildren = useCallback(() => {
    return React.Children.map(children, child => {
      let childType = child.type;
      if (childType === Menu) {
        return React.cloneElement(child, {
          onClickItem: handleSelect
        });
      }
      if (childType === Title) {
        return React.cloneElement(child, {
          clickTitle: this.clickTitle
        });
      }
      return child;
    });
  }, [children]);

  let cls = clsx(extraClassName, className);

  return <div
      ref={dpRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className={cls}>
    {updateChildren()}
  </div>

});

export default Dropdown;