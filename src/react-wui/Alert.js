import React from 'react';
import BaseComponent from './BaseComponent';
import {isNil} from './Utils';
import classnames from 'classnames';
import {IconError, IconInfo, IconOk, IconWarning} from './Icons';
import {CSSTransition} from 'react-transition-group';

const AlertType = {
  simple: {clsName: "alert-simple"},
  info: {clsName: 'alert-info', icon: <IconInfo/>},
  mini: {clsName: 'alert-mini', icon: <IconInfo/>},
  ok: {clsName: 'alert-ok', icon: <IconOk/>},
  warning: {clsName: 'alert-warning', icon: <IconWarning/>},
  error: {clsName: 'alert-error', icon: <IconError/>},
};

export default class Alert extends BaseComponent {

  static defaultProps = {
    className: 'alert',
    showIcon: true,
  };

  static propTypes = {};

  constructor(args) {
    super(args);
    this.state = {activeAnimation: true, removed: false};
  }

  componentDidMount() {
    const {duration} = this.props;

    if (this.utils().isInteger(duration)) {
      this.timeout = setTimeout(() => this.close(), duration);
    }
  }

  close() {
    this.setState({activeAnimation: false});
  }

  exit() {
    if (!this.utils().isNil(this.timeout)) {
      console.log('Alert unmount');
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.setState({removed: true});
  }

  componentWillUnmount() {
    this.exit();
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

    if (this.state.removed) {
      return null;
    }

    let content = <CSSTransition in={this.state.activeAnimation}
                                 timeout={300}
                                 classNames={{
                                   enter: 'enter',
                                   enterActive: 'enter-active',
                                   exit: 'leave',
                                   exitActive: 'leave-active',
                                   exitDone: "leave-done"
                                 }}
                                 onExited={this.exit.bind(this)}>

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
                <button className="button close-btn"
                        onClick={this.close.bind(this)}>x
                </button>
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