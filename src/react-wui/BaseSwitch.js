import React, {useState} from "react";
import classnames from "classnames";
import {isNil} from "./Utils";

function BaseSwitch(props) {
  const {
    value, label, baseClassName, inputType,
    iconChecked, iconUnchecked,
    children, onChange, checked, ...otherProps
  } = props;
  const [checkState, setCheckState] = useState(false);
  const [manuallyChanged, setManuallyChanged] = useState(false);

  //update checked state
  let currentCheckState = checked;
  if (manuallyChanged) {
    currentCheckState = checkState;
  }

  //get the icon
  const Icon = currentCheckState ? iconChecked : iconUnchecked;

  let clsName = classnames(baseClassName, {
    checked: currentCheckState,
    unchecked: !currentCheckState
  });

  const onClick = (evt) => {
    if (!manuallyChanged) {
      setManuallyChanged(true);
    }
    let state = !currentCheckState;
    setCheckState(state);
    !isNil(onChange) && onChange(!isNil(value) ? value : state, evt);
  };

  return <>
    <div className={clsName} {...otherProps}>
      <input type={inputType} value={value} className="hidden-input"
             onClick={onClick}/>
      <span className="icon">
        <Icon/>
      </span>
      <span>
        {label}
        {children}
      </span>
    </div>
  </>;
}

export default BaseSwitch;