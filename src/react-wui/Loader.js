import React from "react";
import BaseComponent from "./BaseComponent";
import {isNil} from "./Utils";
import Mask from "./Mask";

const LoaderWrapperStyle = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center"
};

const LoaderWrapperBlockStyle = {
  ...LoaderWrapperStyle,
  display: "flex",
};

const MaskStyle = {
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  borderRadius: "0.25rem"
};

const LoaderStyle = {
  position: "absolute",
  zIndex: "100"
};

export default class Loader extends BaseComponent {

  static defaultProps = {
    className: 'loader',
    size: "normal",
    type: "primary"
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.state = {};
  }

  getContent() {
    const {type, text} = this.props;
    let content = null;
    if (type === "primary") {
      content = <div className="content"></div>;
    }
    if (type === "secondary" || type === "third") {
      content = <div className="content">
        <div className="segment1">
          <div className="item"></div>
        </div>
        <div className="segment2">
          <div className="item"></div>
        </div>
        <div className="segment3">
          <div className="item"></div>
        </div>
        <div className="segment4">
          <div className="item"></div>
        </div>
        <div className="segment5">
          <div className="item"></div>
        </div>
        <div className="segment6">
          <div className="item"></div>
        </div>
        <div className="segment7">
          <div className="item"></div>
        </div>
        <div className="segment8">
          <div className="item"></div>
        </div>
        <div className="segment9">
          <div className="item"></div>
        </div>
        <div className="segment10">
          <div className="item"></div>
        </div>
        <div className="segment11">
          <div className="item"></div>
        </div>
        <div className="segment12">
          <div className="item"></div>
        </div>
      </div>;
    }

    if (!isNil(text)) {
      return <>
        {content}
        <div className="info">
          {text}
        </div>
      </>
    }
    return content;

  }

  render() {
    const {text, block, color, active, type, size, children, className, appendClass, ...otherProps} = this.props;
    let clsName = this.getClass({
      active: active,
      [type]: type,
      [size]: size,
      [color]: color,
      block
    });

    let content = this.getContent();
    if (!isNil(children)) {
      let wrapperStyle = block ? LoaderWrapperBlockStyle : LoaderWrapperStyle;
      return <>
        <div style={wrapperStyle}>
          <Mask active={active} style={MaskStyle}/>
          <div className={clsName} {...otherProps} style={LoaderStyle}>
            {content}
          </div>
          {children}
        </div>
      </>;
    }
    return <div className={clsName} {...otherProps} >
      {content}
    </div>;

  }

}