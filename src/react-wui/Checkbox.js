import React, {useEffect, useState} from "react";
import classnames from "classnames";
import {IconChecked, IconUnChecked} from "./Icons";

function Checkbox(props) {
  const {value, label, children, body, style, onChange, checked, ...otherProps} = props;
  const [checkState, setCheckState] = useState(false);
  const [manuallyChanged, setManuallyChanged] = useState(false);

  useEffect(() => {
    // console.log("component initialized");
    // return () => console.log("component unmounted");
  });

  //update checked state
  let currentCheckState = checked;
  if (manuallyChanged) {
    currentCheckState = checkState;
  }

  //get the icon
  const Icon = currentCheckState ? IconChecked : IconUnChecked;

  let clsName = classnames("checkbox", {
    checked: currentCheckState,
    unchecked: !currentCheckState
  });

  const onClick = () => {
    if (!manuallyChanged) {
      setManuallyChanged(true);
    }
    setCheckState(!currentCheckState);
  };

  return <>
    <div className={clsName}>
      <input type="checkbox" value={value} className="checkbox-input"
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

export default Checkbox;