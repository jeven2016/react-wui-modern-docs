import React from 'react';
import BaseComponent from "./BaseComponent";
import * as ReactDOM from "react-dom";
import {isNil, place} from "./Utils";
import {preventEvent, WindowEventHandler} from "./event";
import {PopoverTriggerType, Position} from "./common/Constants";

export default class Popover extends BaseComponent {
  static defaultProps = {
    className: 'button',
    header: null,
    body: null,
    position: Position.bottom,
    triggerBy: PopoverTriggerType.click
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.onClick = this.onClick.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.state = {active: false};
    this.ctrlRef = React.createRef();
    this.popoverDomNodeRef = React.createRef(); //reference to popover dom node

  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updatePosition();
  }

  updatePosition() {
    if (this.isActive()) {
      const {position} = this.props;
      let popoverNode = this.popoverDomNodeRef.current;

      popoverNode.style.display = "inline-block";
      place(popoverNode, this.getCtrlNode(), position, 16)
    }
  }

  onClick(evt) {
    if (this.state.active) {
      return;
    }
    this.setState({
      active: !this.state.active
    });
  }

  handleHover(activePopover) {
    const {triggerBy} = this.props;
    if (triggerBy !== PopoverTriggerType.hover) {
      return;
    }
    this.setState({
      active: activePopover
    });
  }

  isActive() {
    return this.state.active;
  }

  getCtrlNode() {
    return ReactDOM.findDOMNode(this.ctrlRef.current);
  }

  closePopover(evt) {
    if (this.getCtrlNode().contains(evt.target)) {
      return;
    }
    if (this.state.active) {
      this.setState({
        active: false,
      });
    }
  }


  render() {
    const {children, body, header, position} = this.props;
    if (isNil(children) || children.length === 0) {
      throw new Error("No child found in this popover.")
    }

    if (children.length > 1) {
      throw new Error("only one child can be set as body of popover.")
    }

    let chd = React.Children.map(children, child => {
      return React.cloneElement(child, {
        onClick: this.onClick,
        onMouseEnter: this.handleHover.bind(this, true),
        onMouseLeave: this.handleHover.bind(this, false),
        onFocus: this.handleHover.bind(this, true),
        onBlur: this.handleHover.bind(this, false),
        ref: this.ctrlRef //a reference to Child component instead of a specific dom node
      });
    });

    return (
        <>
          {chd}
          {
            this.isActive() ? <PopoverWrapper ref={this.popoverDomNodeRef}
                                              body={body}
                                              position={position}
                                              header={header}
                                              active={this.state.active}/>
                : null
          }
          <WindowEventHandler onClick={this.closePopover}
                              onResize={this.updatePosition}/>
        </>
    );
  }
}

/**
 * Using forwardRef and HOC features for popover
 */
class PopoverModal extends BaseComponent {
  constructor(args) {
    super(args);
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.remove();
    }
  }

  //make sure the popover won't be closed while the body or header is clicked
  preventClose(evt) {
    preventEvent(evt)
  }

  render() {
    const {header, body, active, forwardedRef, position} = this.props;
    let positionClassName = `${Position[position]} popover-arrow`;

    this.popoverContent =
        <div onClick={this.preventClose} className="popover" ref={forwardedRef}>
          <div className={positionClassName}
               style={{display: active ? "" : "none"}}/>
          <div className="card">
            {
              isNil(header) ? null :
                  <div className="card-header">{header}</div>
            }
            <div className="card-body">
              {body}
            </div>
          </div>
        </div>;

    return ReactDOM.createPortal(this.popoverContent, this.container);
  }
}

const PopoverWrapper = React.forwardRef((props, ref) => {
  return <PopoverModal {...props} forwardedRef={ref}/>
});