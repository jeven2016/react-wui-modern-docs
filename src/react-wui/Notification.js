import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent';
import {getRandomInt} from './Utils';
import Alert from './Alert';

let GLOBAL_ALERT;
let Utils = BaseComponent.getUtils();

class Notification extends BaseComponent {
  constructor(args) {
    super(args);
    this.state = {
      messages: [],
    };
  }

  componentWillUnmount() {
    console.log('Notification will unmount');
    let cnt = Notification.container;
    if (cnt) {
      cnt.parent.removeChild(cnt);
    }
  }

  static container;

  static initContainer(handleNfInstance) {
    if (Notification.container) {
      return Notification.container;
    }
    let container = document.querySelector('.alert-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'alert-container';
      document.body.appendChild(container);

      Notification.container = container;
    }

    ReactDOM.render(<Notification ref={handleNfInstance}/>, container);
    return Notification.container;
  }

  render() {

    return <>
      {
        this.state.messages.map(({key, ...other}) => {
          return <Alert key={key} {...other}/>;
        })
      }
    </>;
  }

  add(msg) {
    const {messages} = this.state;
    let currentMsgs = messages.concat(msg);
    this.setState({
      messages: currentMsgs,
    });
  }

}

/**
 * Generate a key for inner Alert intances
 * @returns {string}
 */
let generateKey = () => {
  return `nf-key-${Date.now()}-${getRandomInt(1000, 10000)}`;
};

/**
 * Add a alert message to queue
 * @param type
 * @param message
 */
let send = (type, message) => {
  const key = generateKey();
  let duration = 3000;
  let msg = Utils.isString(message) ? {
        key: key,
        duration: duration,
        type: type,
        body: message,
      }
      : {key: key, duration: duration, type: type, ...message};

  if (GLOBAL_ALERT) {
    GLOBAL_ALERT.add(msg);
    return;
  }

  const handleNfInstance = (notificationInstance) => {
    GLOBAL_ALERT = notificationInstance;
    notificationInstance.add(msg);
  };

  let container = Notification.initContainer(handleNfInstance);
  ReactDOM.render(<Notification ref={handleNfInstance}/>, container);

};

export default {
  info(message) {
    send('info', message);
  },
  ok(message) {
    send('ok', message);
  },
  warning(message) {
    send('warning', message);
  },
  error(message) {
    send('error', message);
  },
};