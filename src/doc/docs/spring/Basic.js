import React, {useState, useEffect} from 'react';
import {useSpring, animated, config, useTransition} from 'react-spring';
import {Card} from '../../../react-wui-modern';
import Button from '../../../react-wui-modern/button';
import pic from '../../../style/back.jpg';
import pic2 from '../../../style/back2.jpg';
import pic3 from '../../../style/back3.jpg';
import {random} from '../../../react-wui-modern/Utils';

export const TestOpacity = () => {
  const [show, setShow] = useState(true);

  const toggle = () => {
    setShow(val => !val);
  };

  let card = <Card>
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
  </Card>;

  const to = () => show ? {
    opacity: 1,
    maxHeight: 'none',
    height: 'auto',
    overflow: 'auto',
    background: 'yellow',
  } : {
    opacity: 0,
    maxHeight: 0,
    background: 'red',
    height: 0,
    overflow: 'hidden',
  };

  const from = !to();

  const props = useSpring(
      {
        to: to(),
        from: from,
        duration: '3000',
        // config: config.gentle
      });
  return <>
    <animated.div style={props}>
      {card}

    </animated.div>
    <Button onClick={toggle}>隐藏</Button>
  </>;
};

export const TestNumber = () => {
  const props = useSpring({number: 1, from: {number: 0}});

  const SpringBtn = animated(Button);

  return <SpringBtn>
    {props.number}
  </SpringBtn>;
};

export const TestUseTransition = () => {
  const makeCard = (key, picComp) => {
    return {
      key: key,
      data: picComp,
    };
  };

  const cards = [
    makeCard(1, pic),
    makeCard(2, pic2),
    makeCard(3, pic3),
  ];

  const [index, setIndex] = useState(0);

  const trans = useTransition(cards[index], item => item.key, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: config.molasses,
  });

  console.log(index);

  useEffect(() =>
          void setInterval(() => {
            setIndex(random(0, 2));
          }, 1000),
      [],
  );

  return <Card autoScale>
    <Card.CardImage position="top">
      {trans.map(({item, props, key}) =>
        <animated.span style={props} key={key}>
          <Card.Image key={key} src={item.data} style={{position: "absolute"}}>
          </Card.Image>
        </animated.span>
      )}
    </Card.CardImage>
  </Card>;
};