import React, {useState} from "react";
import {isNil} from "./Utils";
import Menu from "./menu";
import clsx from "clsx";

function Select(props) {
  const {defaultValue, children} = props;
  const [itemState, setItemState] = useState({active: false});

  const clickItem = ({id, text, value}) => {
    console.log("id=" + id);
  };

  const clsName = clsx("select", {
    active: itemState.active
  });

  const showMenu = () => {
    setItemState({active: !itemState.active});
  };

  return <div className={clsName}>
    <div className="info">
    <span className="select-label">
      <span onClick={showMenu}>label</span>
    </span>
      <span className="icon"><i className="fa fa-arrow-up"></i></span>
    </div>
    <Menu>
      <Menu.List>
        {children}
      </Menu.List>
    </Menu>

  </div>;
}

function Option(props) {
  const {children, label, value} = props;
  let text = isNil(label) ? children : label;

  if (isNil(value) || isNil(text)) {
    throw  new Error("the value and label are required.");
  }
  return <Menu.Item id={value} value={value} text={text}/>;

}

Select.Option = Option;
export default Select;