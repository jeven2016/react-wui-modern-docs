import React from 'react';
import BaseComponent from './BaseComponent';
import {isNil} from './Utils';
import classnames from 'classnames';
import {IconWarning} from './Icons';
import { CSSTransition } from 'react-transition-group';

const AlertType = {
  info: {clsName: 'alert-info', icon: null},
  ok: {clsName: 'alert-ok', icon: null},
  warning: {clsName: 'alert-warning', icon: <IconWarning/>},
  error: {clsName: 'alert-error', icon: null},
};

export default class Alert extends BaseComponent {

  static defaultProps = {
    className: 'alert',
    showIcon: true,
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.state = {};
  }

  componentDidMount() {
    const {duration} = this.props;

    if (this.utils().isInteger(duration)) {
      this.timeout = setTimeout(() => {
        console.log('close');
      }, duration);
    }
  }

  componentWillUnmount() {
    console.log('Alert unmount');
    if (!this.utils().isNil(this.timeout)) {
      clearTimeout(this.timeout);
    }
  }

  getContent(type, {title, body, closable, iconType, showIcon}) {
    let typeCls;
    if (AlertType.hasOwnProperty(type)) {
      typeCls = AlertType[type].clsName;
    }
    let clsName = classnames('alert', {
      'with-title': title,
      [typeCls]: typeCls,
    });

    let iconElement = this.getIconContent(showIcon, iconType, type);

    let content = <CSSTransition timeout={3000}>

      <div className={clsName}>
        {iconElement}

        <div className="alert-content">
          {
            !isNil(title) ? <div className="title">{title}</div> : null
          }
          <div className="body">
            {body}
          </div>

        </div>
        {
          !isNil(closable) ?
              <div className="alert-close">
                <button className="button close-btn">x</button>
              </div>
              : null
        }
      </div>
    </CSSTransition>;
    return content;
  }

  getIconContent(showIcon, iconType, type) {
    let iconElement = null;
    let iconElementChild = null;
    if (showIcon) {

      if (!isNil(iconType)) {
        iconElementChild = iconType;
      } else {
        iconElementChild = !isNil(AlertType[type])
            ? AlertType[type].icon
            : null;
      }
      if (iconElementChild) {
        iconElement = <div className="alert-icon">{iconElementChild}</div>;
      }
    }
    return iconElement;
  }

  render() {
    const {
      type, children, className, appendClass,
      duration,
      title, body, closable, iconType, isGlobal,
      showIcon,
      ...otherProps
    } = this.props;

    return this.getContent(type, {title, body, closable, iconType, showIcon},
        otherProps);
  }

}