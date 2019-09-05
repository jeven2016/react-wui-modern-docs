import React, {useRef, useEffect} from 'react';
import Modal from './Modal';
import {Button} from '../index';

const Confirm = React.forwardRef((props, ref) => {
  const {header, onOk, onCancel, okText, cancelText} = props;
  const btnRef = useRef(null);

  return <Modal ref={ref}>
    <Modal.Header>
      hello
    </Modal.Header>
    <Modal.Body>
      This is a modal sample.
      This is a modal sample.
    </Modal.Body>
    <Modal.Footer>
      <Button hasMinWidth={true} color="primary" ref={btnRef}
              onClick={this.closeModal}>OK</Button>
      <Button hasMinWidth={true} color="secondary" onClick={}>Cancel</Button>
    </Modal.Footer>
  </Modal>;
});