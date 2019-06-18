import React from "react";
import classnames from "classnames";

function Item(props) {
  const {active, children, ...otherProps} = props;
  let clsName = classnames("item", {
    active
  });
  return <div className={clsName} {...otherProps}>{children}</div>
}

function Breadcrumb(props) {
  const {hasBackground, separator, children, ...otherProps} = props;

  let clsName = classnames("breadcrumb", {
    "with-bg": hasBackground
  });

  return (
      <div className={clsName} {...otherProps}>
        {
          React.Children.map(children, (chd, i) => {
            if (i === 0) {
              return chd;
            }
            return <>
              <div className="bc-divider">{separator}</div>
              {chd}
            </>
          })
        }
      </div>
  );
}

Breadcrumb.defaultProps={
  separator: "/"
};

Breadcrumb.Item = Item;
export default Breadcrumb;