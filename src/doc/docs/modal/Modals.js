import React, {Component} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Button, Divider, Modal} from '../../../react-wui';

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

      <Modal active={this.state.active} type="primary"
             onCancel={this.closeModal}>
        <Modal.Header>
          Modal Header
        </Modal.Header>
        <Modal.Body>
          南京，简称“宁”，古称金陵、建康，是江苏省会、副省级市、南京都市圈核心城市，国务院批复确定的中国东部地区重要的中心城市、全国重要的科研教育基地和综合交通枢纽
          。全市下辖11个区，总面积6587平方千米，2017年建成区面积1398.69平方千米，常住人口833.5万人，城镇人口685.89万人，城镇化率82.3%，是长三角及华东唯一的特大城市。
        </Modal.Body>
        <Modal.Footer>
          <Button hasMinWidth={true} onClick={this.closeModal}>OK</Button>
          <Button hasMinWidth={true} onClick={this.closeModal}>Cancel</Button>
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
          This is a modal sample.
          This is a modal sample.
        </Modal.Body>
        <Modal.Footer align="center">
          <Button hasMinWidth={true} color="green"
                  onClick={this.closeModal}>OK</Button>
          <Button hasMinWidth={true} onClick={this.closeModal}>Cancel</Button>
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
          <Button hasMinWidth={true} color="green"
                  onClick={this.closeModal}>OK</Button>
          <Button hasMinWidth={true} onClick={this.closeModal}>Cancel</Button>
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
          <Button hasMinWidth={true} color="green"
                  onClick={this.closeModal}>OK</Button>
          <Button hasMinWidth={true} color="red"
                  onClick={this.closeModal}>Cancel</Button>
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
    this.btnRef = React.createRef(null);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.btnRef.current.focus();
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
             extraClassName={this.state.backGroundClass}
             onCancel={this.closeModal}>
        <Modal.Header>
          Modal Header
        </Modal.Header>
        <Modal.Body>
          This is a modal sample.
          This is a modal sample.
        </Modal.Body>
        <Modal.Footer>
          <Button hasMinWidth={true} color="green" ref={this.btnRef}
                  onClick={this.closeModal}>OK</Button>
          <Button hasMinWidth={true} onClick={this.closeModal}>Cancel</Button>
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

export const ModelF = (props) => {
  let comp = <> <Button onClick={(e) => {
    Modal.info({
      type: 'primary',
      header: '删除成功',
      title: '您已经成功删除此数据。',
      body: '请稍候在系统管理界面上审核该结果，谢谢',
      okText: '确定',
    });
  }}>
    Info
  </Button>
    <Button onClick={(e) => {
      Modal.warning({
        header: '删除成功',
        title: '您已经成功删除此数据。',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
      });
    }}>
      warning
    </Button>
    <Button onClick={(e) => {
      Modal.error({
        title: '系统无法删除此数据。',
        body: '请稍候在系统管理界面上查看该结果，谢谢',
        okText: '确定',
      });
    }}>
      error
    </Button>
    <Button onClick={(e) => {
      Modal.success({
        type: 'primary',
        header: '删除成功',
        title: '您已经成功删除此数据。',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
      });
    }}>
      success
    </Button>
    <Button onClick={(e) => {
      Modal.confirm({
        type: 'primary',
        header: '确认删除',
        title: '您确认要删除此记录吗？',
        body: '请稍候在系统管理界面上审核该结果，谢谢',
        okText: '确定',
        cancelText: '取消',
        onOk: ()=>{
          console.log("ok")
        },
        onCancel: ()=>{
          console.log("cancelled")
        }
      });
    }}>
      confirm
    </Button>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Button, Modal} from "react-wui";
  
  `;

  return <SamplePannel component={comp} code={code}/>;
};