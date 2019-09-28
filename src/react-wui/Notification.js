import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import {createContainer, getLeftIfCentered, isString, random} from './Utils';
import Alert from './Alert';
import {EventListener} from './common/Constants';
import useEvent from './common/UseEvent';

const SizeStyle = {
  small: 'alert-container-width-sm',
};

const PositionType = {
  topCenter: 'top-center',
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right',
};

const DEFAULT_CONFIG = {
  position: 'top',
  duration: 5000,
  top: '5rem',
};

const Proxy = (() => {
  let add, initialized = false;
  const attachFunc = ({add: attachedAdd}) => {
    add = attachedAdd;
    initialized = true;
  };

  return {
    initialized: () => initialized,
    attach: attachFunc,
    add: (msg) => add(msg),
  };
})();

const Notification = (props) => {
  const {msgStore, position = PositionType.topCenter} = props;
  const size = 'small'; //only one size provided
  const sizeClassName = SizeStyle[size];
  const [queue, setQueue] = useState([]);
  const cntRef = useRef(null);

  const addMsg = (msg) => {
    console.log(queue.length + 1);
    setQueue(q => [msg, ...q]);
  };

  if (!msgStore.initialized()) {
    msgStore.attach({add: addMsg});
  }

  useEvent(EventListener.resize, (evt) => {
    move();
  }, position === PositionType.topCenter);

  useEffect(() => {
    if (position === PositionType.topCenter) {
      move();
    }

    return () => {
      let cnt = Notification.container;
      cnt && cnt.remove();
      console.log('container is unmounted');
    };
  }, []);

  const move = () => {
    let cnt = cntRef.current;
    if (!cnt) {
      return;
    }
    console.log('move');
    cnt.style.left = getLeftIfCentered(
        cnt, document.documentElement);
    cnt.style.top = DEFAULT_CONFIG.top;
  };
  console.log(queue.length);
  const removeMsg = (key) => {
    const newQueue = [...queue.filter(msg => msg.key !== key)];
    setQueue(newQueue);
  };

  return <div>
    <div className={`alert-container ${sizeClassName} ${position}`}
         ref={cntRef}>
      {
        queue.map(({key, ...other}) => {
          return <Alert autoUnmout={false} key={key} {...other}
                        duration={DEFAULT_CONFIG.duration}
                        onClose={() => removeMsg(key)}
          />;
        }).reverse()
      }
    </div>
  </div>;

};

/**
 * Generate a key for inner Alert intances
 * @returns {string}
 */
let generateKey = () => {
  return `nf-key-${Date.now()}-${random(1000, 10000)}`;
};

/**
 * Add a alert message to queue
 * @param type
 * @param message
 */
let send = (type, config) => {
  const key = generateKey();
  let msg = isString(config) ? {
        key: key,
        duration: DEFAULT_CONFIG.duration,
        type: type,
        body: config,
      }
      : {key: key, duration: DEFAULT_CONFIG.duration, type: type, ...config};

  const proxy = Proxy;
  if (proxy.initialized()) {
    proxy.add(msg);
    return;
  }
  let containerObj = createContainer('wui-alert-cont');
  let notification = ReactDOM.render(<Notification msgStore={proxy}/>,
      containerObj.container);
  proxy.add(msg);
};

export default {
  info(config) {
    send('info', config);
  },
  ok(config) {
    send('ok', config);
  },
  warning(config) {
    send('warning', config);
  },
  error(config) {
    send('error', config);
  },

  simple(config) {
    send('simple', config);
  },
  mini(config) {
    send('mini', config);
  },
};