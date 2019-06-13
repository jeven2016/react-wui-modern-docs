import React from "react";
import BaseSwitch from "./BaseSwitch";
import {IconRadioChecked, IconRadioUnChecked} from "./Icons";

function Radio(props) {
  return BaseSwitch({
    baseClassName: "radio",
    iconChecked: IconRadioChecked,
    iconUnchecked: IconRadioUnChecked,
    inputType: "radio",
    ...props
  });
}

function RadioGroup(props) {

}

export default Radio;