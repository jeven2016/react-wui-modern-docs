import React from "react";

function Select(props) {
  const {defaultValue, children} = props;

  return <div className="select">
    <div className="info">
    <span className="select-label">
      <span>label</span>
    </span>
      <span className="icon"><i className="fa fa-arrow-up"></i></span>
    </div>
    <ul className="menu">
      <div className="menu-list">
        {children}
      </div>
    </ul>
  </div>;
}

function Option(props) {
  return <div className="menu-item"></div>

}

Select.Option = Option;
export default Select;