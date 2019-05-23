import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  ButtonGroup,
  Card,
  Divider,
  Icon,
  Tooltip
} from '../../../react-wui';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMailBulk, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import pic from "../../../style/back.jpg";

export const CardA = () => {
  let comp = <>
    <div>
      <Card>
        <Card.Header>
          Header
        </Card.Header>
        <Card.Body>
          Body
        </Card.Body>
        <Card.Row>
          Row
        </Card.Row>
        <Card.Footer>
          Footer
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header appendClass="bg-color-gray">
          Header
        </Card.Header>
        <Divider/>
        <Card.Body>
          Body
        </Card.Body>
        <Card.Row>
          Row
        </Card.Row>
        <Card.Footer>
          Footer
        </Card.Footer>
      </Card>
    </div>
    <div style={{marginTop: "1rem"}}>
      <Card>
        <Card.Header>
          Header
        </Card.Header>
        <Divider/>
        <Card.Body>
          Body
        </Card.Body>
        <Divider/>
        <Card.Row>
          Row
        </Card.Row>
        <Divider/>
        <Card.Footer>
          Footer
        </Card.Footer>
      </Card>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const CardB = () => {
  let comp = <>

    <div>
      <Card>
        <Card.Row>
          <h2 className="text color-blue">
            <Icon style={{marginRight: "0.5rem"}}>
              <FontAwesomeIcon icon={faUser}/>
            </Icon>
            <span>Jeven Wang</span>
          </h2>
          <h5 className="text comment">Leader of this project</h5>
        </Card.Row>
        <Card.Body>
          在这里输入一段描述文字, 介绍一下名片的人物信息......
        </Card.Body>
        <Card.Footer>
          <ButtonGroup block>
            <Button style={{width: "50%"}} color="green">
              <FontAwesomeIcon icon={faPhone} style={{marginRight: "0.5rem"}}/>
              电话
            </Button>
            <Button style={{width: "50%"}} color="blue">
              <FontAwesomeIcon icon={faMailBulk}
                               style={{marginRight: "0.5rem"}}/>
              邮件
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </div>

    <div>
      <Card style={{marginTop: "1rem"}}>
        <Card.Row>
          <h2 className="text color-blue">
            <Icon style={{marginRight: "0.5rem"}}>
              <FontAwesomeIcon icon={faUser}/>
            </Icon>
            <span>John Smith</span>
          </h2>
          <h5 className="text comment">Leader of this project</h5>
        </Card.Row>
        <Card.Body>
          在这里输入一段描述文字, 介绍一下名片的人物信息......
        </Card.Body>
      </Card>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const CardC = () => {
  let comp = <>

    <div>
      <Tooltip body="一个最简单的,只有图片的卡片">
        <Card>
          <Card.CardImage position="top">
            <Card.Image src={pic}>
            </Card.Image>
          </Card.CardImage>
        </Card>
      </Tooltip>
    </div>

    <div style={{marginTop: "1rem"}}>
      <Card>
        <Card.CardImage position="top">
          <Card.Image src={pic}>
          </Card.Image>
          <Card.OverlayTitle>
            <h2>一个天籁之境</h2>
            <h6>去哪里能找到如此优美的仙境呢?</h6>
          </Card.OverlayTitle>
        </Card.CardImage>
        <Card.Footer>
          <h4>好去处</h4>
          <h5>选一个合适的时间, 去一个最适宜的地方. 这里的风景让人无法拒绝,绝对值得体验的仙境.</h5>
          <h5 className="text comment">
            详情请电话咨询......
          </h5>
        </Card.Footer>
      </Card>
    </div>

    <div style={{marginTop: "1rem"}}>
      <Card>
        <Card.Row>
          <h4>好去处</h4>
          <h5>选一个合适的时间, 去一个最适宜的地方. 这里的风景让人无法拒绝,绝对值得体验的仙境.</h5>
          <h5 className="text comment">
            详情请电话咨询......
          </h5>
        </Card.Row>
        <Card.CardImage position="bottom">
          <Card.Image src={pic}>
          </Card.Image>
          <Card.OverlayTitle>
            <h2>一个天籁之境</h2>
            <h6>去哪里能找到如此优美的仙境呢?</h6>
          </Card.OverlayTitle>
        </Card.CardImage>
      </Card>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};