import React, {useState, Component} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  Drawer,
  Card,
  Input,
  IconClear,
  Form,
  Checkbox,
} from 'react-wui-modern';

export const DrawerA = (props) => {
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeTop, setActiveTop] = useState(false);
  const [activeRight, setActiveRight] = useState(false);
  const [activeBottom, setActiveBottom] = useState(false);

  let comp = <>
    <Button onClick={() => setActiveLeft(true)}>Left</Button>
    <Button onClick={() => setActiveTop(true)}>Top</Button>
    <Button onClick={() => setActiveRight(true)}>Right</Button>
    <Button onClick={() => setActiveBottom(true)}>Bottom</Button>

    <Drawer active={activeLeft} position="left"
            style={{width: '40%'}}
            onClose={() => setActiveLeft(false)}>
    </Drawer>

    <Drawer active={activeTop} position="top"
            style={{height: '40%'}}
            onClose={() => setActiveTop(false)}>
    </Drawer>

    <Drawer active={activeRight} position="right"
            style={{width: '40%'}}
            onClose={() => setActiveRight(false)}>
    </Drawer>

    <Drawer active={activeBottom} position="bottom"
            onClose={() => setActiveBottom(false)}>
    </Drawer>
  </>;

  let code = `
  import React, {useState} from "react";
  import {Button, Drawer, Card} from "react-wui";
  
  const Sample = (props) => {
    const [activeLeft, setActiveLeft] = useState(false);
    const [activeTop, setActiveTop] = useState(false);
    const [activeRight, setActiveRight] = useState(false);
    const [activeBottom, setActiveBottom] = useState(false);
  
    return <>
      <Button onClick={() => setActiveLeft(true)}>Left</Button>
      <Button onClick={() => setActiveTop(true)}>Top</Button>
      <Button onClick={() => setActiveRight(true)}>Right</Button>
      <Button onClick={() => setActiveBottom(true)}>Bottom</Button>
  
      <Drawer active={activeLeft} position="left"
              style={{width: '40%'}}
              onClose={() => setActiveLeft(false)}>
      </Drawer>
  
      <Drawer active={activeTop} position="top"
              style={{height: '40%'}}
              onClose={() => setActiveTop(false)}>
      </Drawer>
  
      <Drawer active={activeRight} position="right"
              style={{width: '40%'}}
              onClose={() => setActiveRight(false)}>
      </Drawer>
  
      <Drawer active={activeBottom} position="bottom"
              onClose={() => setActiveBottom(false)}>
      </Drawer>
    </>;
  }
`;

  return <SamplePannel component={comp} code={code}/>;
};

export const DrawerB = (props) => {
  const [activeLeft, setActiveLeft] = useState(false);

  let comp = <>
    <Button onClick={(e) => {
      setActiveLeft(true);
      e.stopPropagation();
      console.log("stop now")
    }}>隐藏黑色遮罩</Button>

    <Drawer active={activeLeft} position="left"
            showMask={false}
            style={{width: '25rem', background: '#484848'}}
            onClose={() => setActiveLeft(false)}>
      <Card block style={{background: 'transparent', border: 'none'}}>
        <Card.Header>
          <Button extraClassName="pull-right"
                  style={{background: 'transparent', color: '#fff'}}
                  onClick={() => setActiveLeft(false)}>
            <IconClear/>
          </Button>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Item type="block">
              <Input placeholder="Username" block/>
            </Form.Item>
            <Form.Item type="block">
              <Input placeholder="Password" block/>
            </Form.Item>
          </Form>
          <Form.Item type="block" style={{color: '#fff'}}>
            <span className="pull-left">
              <Checkbox>
                Remember me
              </Checkbox>
            </span>
            <span className="pull-right">
              Forgot password?
            </span>
          </Form.Item>
          <Form.Item type="block" style={{marginTop: '4rem'}}>
            <Button color="green" block onClick={() => setActiveLeft(false)}
                    style={{borderRadius: '3rem', marginTop: '2rem'}}>
              Sign IN
            </Button>
          </Form.Item>
        </Card.Body>
      </Card>
    </Drawer>
  </>;

  let code = `
  import React, {useState} from "react";
  import {Button, Drawer, Card} from "react-wui";
  
  const Sample = (props) => {
    const [activeLeft, setActiveLeft] = useState(false);
  
    return <>
      <Button onClick={() => setActiveLeft(true)}>Left</Button>
      <Drawer active={activeLeft} position="left"
              style={{width: '40%'}}
              onClose={() => setActiveLeft(false)}>
      </Drawer>
    </>;
  }
`;

  return <SamplePannel component={comp} code={code}/>;
};

export class DrawerC extends Component {
  constructor(args) {
    super(args);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.state = {
      active: false,
    };
  }

  openDrawer(evt) {
    this.setState({active: true});
  }

  closeDrawer() {
    this.setState({active: false});
  }

  render() {
    let comp = <>
      <Button onClick={this.openDrawer}>右侧显示</Button>
      <Drawer active={this.state.active} position="right"
              style={{width: '40%'}} onClose={this.closeDrawer}/>
    </>;

    let code = `
import React, {Component} from "react";
import {Toggle} from "react-wui";


`;

    return <SamplePannel component={comp} code={code}/>;
  }
}

export class DrawerD extends Component {
  constructor(args) {
    super(args);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.state = {
      active: false,
    };
  }

  openDrawer(evt) {
    this.setState({active: true});
  }

  closeDrawer() {
    this.setState({active: false});
  }

  render() {
    let comp = <>
      <Button onClick={this.openDrawer}>底部显示</Button>
      <Drawer active={this.state.active} position="bottom"
              style={{height: '40%'}} onClose={this.closeDrawer}/>
    </>;

    let code = `
import React, {Component} from "react";
import {Toggle} from "react-wui";


`;

    return <SamplePannel component={comp} code={code}/>;
  }
}
