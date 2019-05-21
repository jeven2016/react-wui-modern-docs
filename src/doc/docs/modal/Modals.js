import React, {Component} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Button, Modal} from '../../../react-wui';

export class ModalA extends Component {
  constructor(args) {
    super(args);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      active: false,
    };
  }

  openModal() {
    this.setState({active: true});
  }

  closeModal() {
    this.setState({active: false});
  }

  render() {
    let comp = <>
      <Button onClick={this.openModal}>打开一个对话框</Button>

      <Modal active={this.state.active}
             onCancel={this.closeModal}>
        <Modal.Header>
          Modal Header
        </Modal.Header>
        <Modal.Body>
          南京，简称“宁”，古称金陵、建康，是江苏省会、副省级市、南京都市圈核心城市，国务院批复确定的中国东部地区重要的中心城市、全国重要的科研教育基地和综合交通枢纽
          。全市下辖11个区，总面积6587平方千米，2017年建成区面积1398.69平方千米，常住人口833.5万人，城镇人口685.89万人，城镇化率82.3%，是长三角及华东唯一的特大城市。
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeModal}>OK</Button>
          <Button onClick={this.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>;

    let code = `
  import React, {Component} from "react";
  import {Button, Modal} from "react-wui";
  
  `;

    return <SamplePannel component={comp} code={code}/>;
  }

}

export class ModalB extends Component {
  constructor(args) {
    super(args);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      active: false,
    };
  }

  openModal() {
    this.setState({active: true});
  }

  closeModal() {
    this.setState({active: false});
  }

  render() {
    let comp = <>
      <Button onClick={this.openModal}>打开一个对话框</Button>

      <Modal alignCenter={true} active={this.state.active}
             onCancel={this.closeModal}>
        <Modal.Header>
          Modal Header
        </Modal.Header>
        <Modal.Body>
          南京，简称“宁”，古称金陵、建康，是江苏省会、副省级市、南京都市圈核心城市，国务院批复确定的中国东部地区重要的中心城市、全国重要的科研教育基地和综合交通枢纽
          。全市下辖11个区，总面积6587平方千米，2017年建成区面积1398.69平方千米，常住人口833.5万人，城镇人口685.89万人，城镇化率82.3%，是长三角及华东唯一的特大城市。
        </Modal.Body>
        <Modal.Footer align="center">
          <Button color="green" onClick={this.closeModal}>OK</Button>
          <Button onClick={this.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>;

    let code = `
  import React, {Component} from "react";
  import {Button, Modal} from "react-wui";
  
  `;

    return <SamplePannel component={comp} code={code}/>;
  }

}

export class ModalC extends Component {
  constructor(args) {
    super(args);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      active: false,
    };
  }

  openModal() {
    this.setState({active: true});
  }

  closeModal() {
    this.setState({active: false});
  }

  render() {
    let comp = <>
      <Button onClick={this.openModal}>打开一个对话框</Button>

      <Modal autoClose={false} active={this.state.active}
             onCancel={this.closeModal}>
        <Modal.Header>
          Modal Header
        </Modal.Header>
        <Modal.Body>
          This is a modal sample.
          This is a modal sample.
        </Modal.Body>
        <Modal.Footer>
          <Button color="green" onClick={this.closeModal}>OK</Button>
          <Button onClick={this.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>;

    let code = `
  import React, {Component} from "react";
  import {Button, Modal} from "react-wui";
  
  `;

    return <SamplePannel component={comp} code={code}/>;
  }

}

export class ModalD extends Component {
  constructor(args) {
    super(args);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      active: false,
    };
  }

  openModal() {
    this.setState({active: true});
  }

  closeModal() {
    this.setState({active: false});
  }

  render() {
    let comp = <>
      <Button onClick={this.openModal}>黑色背景</Button>

      <Modal type="simple" active={this.state.active}
             onCancel={this.closeModal}>
        <Modal.Header>
          Modal Header
        </Modal.Header>
        <Modal.Body>
          This is a modal sample.
          This is a modal sample.
        </Modal.Body>
        <Modal.Footer>
          <Button color="green" onClick={this.closeModal}>OK</Button>
          <Button color="red" onClick={this.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>;

    let code = `
  import React, {Component} from "react";
  import {Button, Modal} from "react-wui";
  
  `;

    return <SamplePannel component={comp} code={code}/>;
  }

}

export class ModalE extends Component {
  constructor(args) {
    super(args);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      active: false,
      backGroundClass: null,
    };
  }

  openModal(bgColorClassName) {
    let bgColorClass = `clear-border ${bgColorClassName} text color-white`;
    this.setState({active: true, backGroundClass: bgColorClass});
  }

  closeModal() {
    this.setState({active: false});
  }

  render() {
    let comp = <>
      <Button
          onClick={this.openModal.bind(this, 'bg-color-blue')}>蓝色背景色</Button>
      <Button
          onClick={this.openModal.bind(this, 'bg-color-pink')}>粉色背景色</Button>
      <Button
          onClick={this.openModal.bind(this, 'bg-color-green')}>绿色背景色</Button>

      <Modal alignCenter={true} active={this.state.active}
             onCancel={this.closeModal}>
        <Modal.Header appendClass={this.state.backGroundClass}>
          Modal Header
        </Modal.Header>
        <Modal.Body appendClass={this.state.backGroundClass}>
          This is a modal sample.
          This is a modal sample.
        </Modal.Body>
        <Modal.Footer appendClass={this.state.backGroundClass}>
          <Button color="green" onClick={this.closeModal}>OK</Button>
          <Button onClick={this.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>;

    let code = `
  import React, {Component} from "react";
  import {Button, Modal} from "react-wui";
  
  `;

    return <SamplePannel component={comp} code={code}/>;
  }

}