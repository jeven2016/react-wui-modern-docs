import React, {useState} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Button, ButtonGroup, Card, Checkbox, Progress} from '../../../react-wui-modern';
import {DocRow} from '../../common/DocComponents';

export const ProgressA = () => {
  const [value, setValue] = useState(30);
  const increment = 10;
  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  let comp = <>
    <DocRow>
      <ButtonGroup>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>
    </DocRow>
    <DocRow>
      <Card>
        <Card.Row>
          <Progress percentValue={value}/>
          <Progress percentValue={value} type="info"/>
          <Progress percentValue={value} type="ok"/>
          <Progress percentValue={value} type="warning"/>
          <Progress percentValue={value} type="error"/>
        </Card.Row>
      </Card>
    </DocRow>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Popover} from "react-wui";
  
  export const ProgressA = () => {
      const [value, setValue] = useState(30);
      const increment = 10;
      const increase = () => setValue(
          val => val + increment >= 100 ? 100 : val + increment);
      const decrease = () => setValue(
          val => val - increment <= 0 ? 0 : val - increment);
    
      let comp = <>
        <DocRow>
          <ButtonGroup>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
          </ButtonGroup>
        </DocRow>
        <DocRow>
          <Card>
            <Card.Row>
              <Progress percentValue={value}/>
              <Progress percentValue={value} type="info"/>
              <Progress percentValue={value} type="ok"/>
              <Progress percentValue={value} type="warning"/>
              <Progress percentValue={value} type="error"/>
            </Card.Row>
          </Card>
        </DocRow>
    
      </>;
  }
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const ProgressB = () => {
  const [value, setValue] = useState(30);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showStrip, setShowStrip] = useState(false);
  const increment = 10;
  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  let comp = <>
    <DocRow>
      <ButtonGroup>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>
      <Checkbox onChange={val => setShowAnimation(val)}>显示动画</Checkbox>
      <Checkbox onChange={val => setShowStrip(val)}>显示条纹</Checkbox>
    </DocRow>
    <DocRow>
      <Card>
        <Card.Row>
          <Progress percentValue={value} showDetail hasStripe={showStrip}
                    hasAnimation={showAnimation}/>
          <Progress percentValue={value} type="info" showDetail
                    hasStripe={showStrip} hasAnimation={showAnimation}/>
          <Progress percentValue={value} type="ok" showDetail
                    hasStripe={showStrip} hasAnimation={showAnimation}/>
          <Progress percentValue={value} type="warning" showDetail
                    hasStripe={showStrip} hasAnimation={showAnimation}/>
          <Progress percentValue={value} type="error" showDetail
                    hasStripe={showStrip} hasAnimation={showAnimation}/>
        </Card.Row>
      </Card>
    </DocRow>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Popover} from "react-wui";
  
  export const ProgressA = () => {
      const [value, setValue] = useState(30);
      const increment = 10;
      const increase = () => setValue(
          val => val + increment >= 100 ? 100 : val + increment);
      const decrease = () => setValue(
          val => val - increment <= 0 ? 0 : val - increment);
    
      let comp = <>
        <DocRow>
          <ButtonGroup>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
          </ButtonGroup>
        </DocRow>
        <DocRow>
          <Card>
            <Card.Row>
              <Progress percentValue={value}/>
              <Progress percentValue={value} type="info"/>
              <Progress percentValue={value} type="ok"/>
              <Progress percentValue={value} type="warning"/>
              <Progress percentValue={value} type="error"/>
            </Card.Row>
          </Card>
        </DocRow>
    
      </>;
  }
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const ProgressC = () => {
  const [value, setValue] = useState(30);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const increment = 10;
  const increase = () => setValue(
      val => val + increment >= 100 ? 100 : val + increment);
  const decrease = () => setValue(
      val => val - increment <= 0 ? 0 : val - increment);

  let comp = <>
    <DocRow>
      <Checkbox onChange={(val) => setActive(val)}>
        {active ? '显示进度条' : '隐藏中'}
      </Checkbox>
      <Checkbox onChange={(val) => setLoading(val)}>
        {loading ? '显示Loader' : '隐藏Loader'}
      </Checkbox>
    </DocRow>
    <DocRow>
      <ButtonGroup>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </ButtonGroup>
    </DocRow>
    <Progress top
              active={active}
              percentValue={value}
              showLoading={loading}
              type="error"
              style={{top: '4rem', height: '3px'}}/>
  </>;

  let code = `
 
 
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};