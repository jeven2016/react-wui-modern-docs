import React, {Component} from 'react';
import {Card, Divider} from '../../../react-wui';
import SamplePannel from '../../common/SamplePannel';
import {Drawer, Card, Button} from '../../../react-wuilo';

export class DrawerA extends Component {
  constructor(args) {
    super(args);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.state = {
      active: false,
    };
  }

  openDrawer() {
    this.setState({active: true});
  }

  closeDrawer() {
    this.setState({active: false});
  }

  render() {
    let comp = <>
      <Button>左侧显示</Button>

      <Drawer>
        <Card block>
          <Card.Header hasBackground>Header</Card.Header>
          <Card.Body>
            <Button></Button>
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
