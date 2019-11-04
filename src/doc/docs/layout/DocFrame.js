import Frame from 'react-frame-component';
import {Template} from './FrameHeader';
import SamplePannel from '../../common/SamplePannel';
import React from 'react';

const DocFrame = (props) => {
  const {children, code} = props;
  let comp = <Frame initialContent={Template} mountTarget='#docRoot'
                    style={{border: '1px solid #ccc', overflow: 'visible'}}
                    scrolling="yes"
                    frameBorder="0"
                    width="100%" height="500px">
    {children}
  </Frame>;

  return <SamplePannel component={comp} code={code}/>;
};

export default DocFrame;