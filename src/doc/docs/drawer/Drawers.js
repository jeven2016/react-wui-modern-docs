import React, {Component} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Button, Drawer, Card} from '../../../react-wui';

export class DrawerA extends Component {
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
      <Button onClick={this.openDrawer}>左侧显示</Button>
      <Drawer active={this.state.active} position="left"
              style={{width: "40%"}} onClose={this.closeDrawer}>
        <Card block>
          <Card.Header hasBackground>
            Header
          </Card.Header>
          <Card.Body>
            <h4>This is my body!</h4>
            <h4>This is my body!</h4>
            <h4>This is my body!</h4>
            <h4>This is my body!</h4>
            <h4>This is my body!</h4>
          </Card.Body>

        </Card>
      </Drawer>
    </>;

    let code = `
import React, {Component} from "react";
import {Toggle} from "react-wui";


`;

    return <SamplePannel component={comp} code={code}/>;
  }
}

export class DrawerB extends Component {
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
      <Button onClick={this.openDrawer}>顶部显示</Button>
      <Drawer active={this.state.active} position="top"
              style={{height: "40%"}} onClose={this.closeDrawer}/>
    </>;

    let code = `
import React, {Component} from "react";
import {Toggle} from "react-wui";


`;

    return <SamplePannel component={comp} code={code}/>;
  }
}

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
              style={{width: "40%"}} onClose={this.closeDrawer}/>
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
              style={{height: "40%"}} onClose={this.closeDrawer}/>
    </>;

    let code = `
import React, {Component} from "react";
import {Toggle} from "react-wui";


`;

    return <SamplePannel component={comp} code={code}/>;
  }
}
