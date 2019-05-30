import React from 'react';
import BaseComponent from './BaseComponent';
import * as ReactDOM from 'react-dom';
import {isNil, place} from './Utils';
import {preventEvent, WindowEventHandler} from './event';
import {PopoverTriggerType, Position} from './common/Constants';
import Card from './card';
import Divider from './divider';

export default class Popover extends BaseComponent {
  static defaultProps = {
    className: 'popover',
    header: null,
    body: null,
    getContent: null, //a callback that subclass can override it to generate the content
    position: Position.bottom,
    triggerBy: PopoverTriggerType.click,
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.onClick = this.onClick.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.state = {active: false, insertDomNode: false};
    this.ctrlRef = React.createRef();
    this.popoverDomNodeRef = React.createRef(); //reference to popover dom node

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updatePosition();
  }

  updatePosition() {
    if (this.isActive()) {
      const {position} = this.props;
      let popoverNode = this.popoverDomNodeRef.current;

      popoverNode.style.display = 'inline-block';
      place(popoverNode, this.getCtrlNode(), position, 10);
    }
  }

  onClick(evt) {
    if (this.state.active) {
      return;
    }
    this.setState({
      active: !this.state.active,

      //only insert the dom node to body while 'active' is changed.
      //this cause:
      // 1. the popover won't be initially inserted into dom tree.
      // 2. but once it is inserted the dom node won't be removed even though if it is invisible.
      // 3. the dom node can only be removed while popover is unmounted.
      insertDomNode: true
    });
  }

  handleHover(activePopover) {
    const {triggerBy} = this.props;
    if (triggerBy !== PopoverTriggerType.hover) {
      return;
    }
    this.setState({
      active: activePopover,
      insertDomNode: true
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
    const {className, children, body, header, position, getContent} = this.props;
    if (isNil(children) || children.length === 0) {
      throw new Error('No child found in this popover.');
    }

    if (children.length > 1) {
      throw new Error('only one child can be set as body of popover.');
    }

    let chd = React.Children.map(children, child => {
      return React.cloneElement(child, {
        onClick: this.onClick,
        onMouseEnter: this.handleHover.bind(this, true),
        onMouseLeave: this.handleHover.bind(this, false),
        onFocus: this.handleHover.bind(this, true),
        onBlur: this.handleHover.bind(this, false),
        ref: this.ctrlRef, //a reference to Child component instead of a specific dom node
      });
    });

    return (
        <>
          {chd}

          {this.state.insertDomNode ? <PopoverWrapper className={className}
                                                      ref={this.popoverDomNodeRef}
                                                      getContent={getContent}
                                                      active={this.isActive()}
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
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.parentNode.removeChild(this.container);
    }
  }

  //make sure the popover won't be closed while the body or header is clicked
  preventClose(evt) {
    preventEvent(evt);
  }

  render() {
    const {className, getContent, header, body, active, forwardedRef, position} = this.props;
    let positionClassName = `${Position[position]} popover-arrow`;
    let content;
    if (!isNil(getContent)) {
      content = getContent({
        ref: forwardedRef,
        position: position,
        onClick: this.preventClose,
        active: active,
        header: header,
        body: body,
      });
    } else {
      content =
          <div onClick={this.preventClose} className={className}
               style={{display: active ? '' : 'none'}}
               ref={forwardedRef}>
            <div className={positionClassName}/>
            <Card>
              {
                isNil(header) ? null :
                    <>
                      <Card.Header>{header}</Card.Header>
                      <Divider/>
                    </>
              }
              <Card.Body>
                {body}
              </Card.Body>
            </Card>
          </div>;
    }

    return ReactDOM.createPortal(content, this.container);
  }
}

const PopoverWrapper = React.forwardRef((props, ref) => {
  return <PopoverModal {...props} forwardedRef={ref}/>;
});