import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Icon,
  Input,
  Row,
  Tooltip
} from '../../../react-wui-modern';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {
  faAddressCard,
  faUserNurse,
  faUserSecret
} from "@fortawesome/free-solid-svg-icons";

export const FormA = () => {
  let comp = <>
    <Form>
      <Form.Item type="inline">
        <label>Username</label>
        <Input placeholder="..."/>
        <label>Password</label>
        <Input placeholder="..."/>
        <Button color="blue">登录</Button>
      </Form.Item>
    </Form>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Tooltip} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const FormB = () => {
  let comp = <>
    <Card style={{width: "60%"}}>
      <Card.Row>
        <Form>
          <Form.Item type="block">
            <label>用户名:</label>
            <Input placeholder="..." block/>
            <h5 className="text comment">请输出正确的用户名</h5>
          </Form.Item>
          <Form.Item type="block">
            <label>密码:</label>
            <Input nativeType="password" block placeholder="..."/>
            <h5 className="text comment">请输出正确的密码</h5>
          </Form.Item>
          <Form.Item type="block">
            <Button color="blue">登录</Button>
            <Button>重置</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Tooltip} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const FormC = () => {
  let comp = <>
    <Card style={{width: "60%"}}>
      <Card.Row>
        <Form>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  用户名:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Input placeholder="..." block/>
                <h5 className="text comment">请输出正确的用户名</h5>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  密码:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Input nativeType="password" block placeholder="..."/>
                <h5 className="text comment">请输出正确的密码</h5>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}> </Col>
              <Col sm={8} md={9}>
                <Button color="blue">登录</Button>
                <Button>重置</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Tooltip} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const FormD = () => {
  let comp = <>
    <Card style={{width: "100%"}}>
      <Card.Header hasBackground>
        用户登录
      </Card.Header>
      <Divider/>
      <Card.Row>
        <Form>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  用户名:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Tooltip position="bottom" body="用户的格式:......">
                  <Input placeholder="admin" block borderType="ok"/>
                </Tooltip>
                <h5 className="info text ok">正确的用户名</h5>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  密码:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Tooltip position="bottom" body="密码的格式:......">
                  <Input nativeType="password" block borderType="warning"
                         placeholder="#$%%%..."/>
                </Tooltip>
                <h5 className="info text warning">请输入正确的密码</h5>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  年龄:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Tooltip position="bottom" body="年龄的格式:......">
                  <Input block borderType="error" placeholder="age..."/>
                </Tooltip>
                <h5 className="info text error">请输入正确的年龄</h5>
              </Col>
            </Row>
          </Form.Item>
          <Divider/>
          <Form.Item type="row" style={{marginTop: "1rem"}}>
            <Row align="start">
              <Col sm={4} md={3}> </Col>
              <Col sm={8} md={9}>
                <Button color="blue">登录</Button>
                <Button>重置</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Tooltip} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const FormE = () => {
  let comp = <>
    <Card style={{width: "100%"}}>
      <Card.Header hasBackground>
        <Icon style={{marginRight: "0.5rem"}}>
          <FontAwesomeIcon icon={faUser}/>
        </Icon>
        用户登录
      </Card.Header>
      <Divider/>
      <Card.Row>
        <Form>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  <span className="text bold color-red">*</span>
                  &nbsp;用户名:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Tooltip position="bottom" body="用户的格式:......">
                  <Input.IconInput leftIcon block borderType="ok">
                    <Input placeholder="admin"/>
                    <Icon>
                      <FontAwesomeIcon icon={faUser}/>
                    </Icon>
                  </Input.IconInput>
                </Tooltip>
                <h5 className="info text ok">正确的用户名</h5>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  <span className="text bold color-red">*</span>
                  &nbsp;密码:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Tooltip position="bottom" body="密码的格式:......">
                  <Input.IconInput leftIcon block borderType="warning">
                    <Input placeholder="#$%%%..."/>
                    <Icon>
                      <FontAwesomeIcon icon={faUserSecret}/>
                    </Icon>
                  </Input.IconInput>
                </Tooltip>
                <h5 className="info text warning">请输入正确的密码</h5>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  <span className="text bold color-red">*</span>
                  &nbsp;年龄:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Tooltip position="bottom" body="年龄的格式:......">
                  <Input.IconInput leftIcon block borderType="error">
                    <Input placeholder="age..."/>
                    <Icon>
                      <FontAwesomeIcon icon={faUserNurse}/>
                    </Icon>
                  </Input.IconInput>
                </Tooltip>
                <h5 className="info text error">请输入正确的年龄</h5>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row align="start">
              <Col sm={4} md={3}>
                <Form.Label>
                  <span className="text bold color-red">*</span>
                  &nbsp;地址:
                </Form.Label>
              </Col>
              <Col sm={8} md={9}>
                <Tooltip position="bottom" body="地址的格式:......">
                  <Input.IconInput leftIcon={false} block borderType="error">
                    <Input placeholder="age..."/>
                    <Icon>
                      <FontAwesomeIcon icon={faAddressCard}/>
                    </Icon>
                  </Input.IconInput>
                </Tooltip>
                <h5 className="info text error">请输入正确的地址</h5>
              </Col>
            </Row>
          </Form.Item>
          <Divider/>
          <Form.Item type="row" style={{marginTop: "1rem"}}>
            <Row align="start">
              <Col sm={4} md={3}> </Col>
              <Col sm={8} md={9}>
                <Button color="blue">登录</Button>
                <Button>重置</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Tooltip} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};
