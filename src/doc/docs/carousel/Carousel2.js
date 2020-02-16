import SamplePannel from '../../common/SamplePannel';
import React, {useState} from 'react';
import {autoPlay} from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import Carousel from '../../../react-wui-modern/carousel/Carousel';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ItemStyle = {
  background: 'green',
  height: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontSize: '3rem',
  fontWeight: '500',
  overflow: 'hidden',
};

export const AutoPlayCom = () => {
  const [index, setIndex] = useState(0);
  const onChangeIndex = (index) => {
    setIndex(index);
  };

  let comp = <>
        <Carousel active={index}
                  axis='x'
                  hasIndicators={false}
                  position="right"
                  indicatorType='circle'
                  onChange={onChangeIndex}>
          <div style={ItemStyle}>
            <div>1</div>
            <div style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              bottom: '1rem',
              fontSize: '1rem',
              fontWeight: '700',
            }}>
              <p>Title 1</p>
            </div>
          </div>
          <div style={ItemStyle}>
            2
          </div>
          <div style={ItemStyle}>
            3
          </div>
          <div style={ItemStyle}>
            4
          </div>
          <div style={ItemStyle}>
            5
          </div>
        </Carousel>
      </>
  ;
  return <SamplePannel component={comp} code={``}/>;
};
