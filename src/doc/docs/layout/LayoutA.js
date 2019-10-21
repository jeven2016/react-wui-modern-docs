import React from 'react';
import SamplePannel from '../../common/SamplePannel';

import '../../../style/index.css';
import '../../../style/wui-bundle-min.css';
import '../../../style/doc.scss';

const LayoutA = (props)=>{
  let comp = <>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export default LayoutA;