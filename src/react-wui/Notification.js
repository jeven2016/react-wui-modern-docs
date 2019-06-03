import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent';
import {getRandomInt, isNil} from './Utils';
import classnames from 'classnames';
import Alert from './Alert';

class Notification extends BaseComponent {
  constructor(args) {
    super(args);
    this.state = {
      messages: [],
    };
    this.container = null;
  }

  static container;

  static initContainer() {
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
    return Notification.container;
  }

  render() {

    return (<>
          {
            this.state.messages.map(msg => {
              return <Alert key={this.generateKey()} {...msg}/>;
            })
          }
        </>
    );
  }

  generateKey() {
    return `nf-key-${Date.now()}-${getRandomInt(1000, 10000)}`;
  }

  add(msg) {
    const {messages} = this.state;
    let currentMsgs = messages.concat(msg);
    this.setState({
      messages: currentMsgs,
    });
  }

}

function handleNfInstance(notificationInstance) {
  notificationInstance.add({
    type: 'info',
    title: 'a test',
    body: 'what the fuck',
    closable: true,
  });
}

export default {
  info({title, body, closable, iconType, showIcon}) {
    let container = Notification.initContainer();
    ReactDOM.render(<Notification ref={handleNfInstance}/>, container);

  },
};