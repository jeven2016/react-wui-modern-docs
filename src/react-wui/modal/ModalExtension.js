import React, {useEffect, useRef, useState} from 'react';
import * as ReactDOM from 'react-dom';
import Modal from './Modal';
import {Button, IconError, IconInfo, IconOk, IconWarning} from '../index';
import {isNil} from '../Utils';
import Row from '../grid/Row';
import Col from '../grid/Col';

const InfoType = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
  confirm: 'confirm',
};

const iconColorClass = {
  info: 'text color-blue',
  warning: 'text color-yellow',
  error: 'text color-red',
  success: 'text color-green',
  confirm: 'text color-blue',
};

const titleStyle = {
  fontSize: '1.25em',
  fontWeight: '500',
  lineHeight: '1.5',
};

const contentStyle = {
  display: 'flex',
  flex: '0 1 100%',
};

const iconColStyle = {
  display: 'flex',
  fontSize: '2em',
  marginRight: '0.5em',
  flex: '0 0 2em',
  justifyContent: 'flex-end',
};

const textColStyle = {
  flex: '0 1 auto',
};

let SubModal = (props) => {
  const {
    infoType, header, title, body,
    okText = 'OK', cancelText = 'Cancel',
    onOk, onCancel, icon, ...otherProps
  } = props;
  const [active, setActive] = useState(false);
  const modalHeader = isNil(header) ? null :
      <Modal.Header>{header}</Modal.Header>;

  //todo :a workaround since ReactDOM.render cannot work perfectly with CSSTransition
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.clearTimeout(timeout);
      setActive(true);
    }, 200);
  }, []);

  const closeModal = (e) => {
    setActive(false);
  };

  const handleOk = (e) => {
    closeModal(e);
    onOk && onOk(e);
  };

  const handleCancel = (e) => {
    closeModal(e);
    onCancel && onCancel(e);
  };

  const getIcon = () => {
    if (!isNil(icon)) {
      return icon;
    }
    switch (infoType) {
      case InfoType.info:
        return <IconInfo/>;
      case InfoType.warning:
        return <IconWarning/>;
      case InfoType.error:
        return <IconError/>;
      case InfoType.success:
        return <IconOk/>;
      case InfoType.confirm:
        return <IconInfo/>; //need to update
    }
  };

  const modal = <Modal active={active}
                       onCancel={closeModal}
                       {...otherProps}>
    {modalHeader}
    <Modal.Body>
      <div style={contentStyle}>
        <div style={iconColStyle} className={iconColorClass[infoType]}>
          {getIcon()}
        </div>
        <div style={textColStyle}>
          <Row>
            <Col sm={12} style={titleStyle}>{title}</Col>
          </Row>
          <Row style={{marginTop: '0.5rem'}}>
            <Col sm={12}>{body}</Col>
          </Row>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button hasMinWidth={true} color="blue"
              onClick={handleOk}>{okText}</Button>
      {InfoType.confirm !== infoType ? null :
          <Button hasMinWidth={true}
                  onClick={handleCancel}>{cancelText}</Button>}

    </Modal.Footer>
  </Modal>;

  return modal;

};

let show = (infoType, config) => {
  let container = document.createElement('div');
  container.className = 'alert-container';
  document.body.appendChild(container);
  const modal = <SubModal infoType={infoType} {...config} />;

  //CSSTransition not working for ReactDOM.render, todo
  ReactDOM.render(modal, container);
};

export default {
  info(config) {
    show(InfoType.info, config);
  },
  warning(config) {
    show(InfoType.warning, config);
  },
  error(config) {
    show(InfoType.error, config);
  },
  success(config) {
    show(InfoType.success, config);
  },
  confirm(config) {
    show(InfoType.confirm, config);
  },
};