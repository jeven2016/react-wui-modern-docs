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
      content = <span className="content"></span>;
    }
    if (type === "secondary" || type === "third") {
      content = <span className="content">
        <span className="segment1">
          <span className="item"></span>
        </span>
        <span className="segment2">
          <span className="item"></span>
        </span>
        <span className="segment3">
          <span className="item"></span>
        </span>
        <span className="segment4">
          <span className="item"></span>
        </span>
        <span className="segment5">
          <span className="item"></span>
        </span>
        <span className="segment6">
          <span className="item"></span>
        </span>
        <span className="segment7">
          <span className="item"></span>
        </span>
        <span className="segment8">
          <span className="item"></span>
        </span>
        <span className="segment9">
          <span className="item"></span>
        </span>
        <span className="segment10">
          <span className="item"></span>
        </span>
        <span className="segment11">
          <span className="item"></span>
        </span>
        <span className="segment12">
          <span className="item"></span>
        </span>
      </span>;
    }

    if (!isNil(text)) {
      return <>
        {content}
        <span className="info">
          {text}
        </span>
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
        <span style={wrapperStyle}>
          <Mask active={active} style={MaskStyle}/>
          <span className={clsName} {...otherProps} style={LoaderStyle}>
            {content}
          </span>
          {children}
        </span>
      </>;
    }
    return <span className={clsName} {...otherProps} >
      {content}
    </span>;

  }

}