import React from 'react';
import BaseComponent from './BaseComponent';
import {PopoverTriggerType, Position} from './common/Constants';
import Popover from './Popover';
import {isNil} from './Utils';

export default class Tooltip extends BaseComponent {
  static defaultProps = {
    className: 'tooltip',
    body: null,
    position: Position.top,
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.getContent = this.getContent.bind(this);
  }

  getContent({ref, position, onClick, active, body}) {
    const {className} = this.props;
    let positionClassName = `${Position[position]} popover-arrow`;
    return <div onClick={onClick} className={className}
                ref={ref}>
      <div className={positionClassName}
           style={{display: active ? 'inline-flex' : 'none'}}/>
      <div>
        {body}
      </div>
    </div>;
  }

  render() {
    const {className, body, position, children, ...otherProps} = this.props;
    return <Popover triggerBy={PopoverTriggerType.hover}
                    body={body}
                    position={position}
                    getContent={this.getContent} {...otherProps}>
      {children}
    </Popover>;
  }
}
