import React from 'react';
import SamplePannel from "../../common/SamplePannel";
import {Blockquota} from "react-wui-modern";

export const BlockquotaA = () => {
  let comp = <>
    <Blockquota>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
    <Blockquota type="primary">
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
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

export const BlockquotaB = () => {
  let comp = <>
    <Blockquota hasBorder>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
    <Blockquota type="primary" hasBorder>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
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

export const BlockquotaC = () => {
  let comp = <>
    <Blockquota hasBorder hasBackground>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
    <Blockquota type="primary" hasBorder hasBackground>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
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

export const BlockquotaD = () => {
  let comp = <>
    <Blockquota hasBorder hasBackground hasBox
                extraClassName="bold text color-white bg-color-black">
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
    <Blockquota type="primary" hasBorder hasBackground hasBox
                extraClassName="bold text color-white bg-color-green">
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
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

export const BlockquotaE = () => {
  let comp = <>
    <Blockquota type="secondary" hasBox>
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
    <Blockquota type="primary" hasBox type="secondary"
                hasBackground
                extraClassName="bold text color-white bg-color-purple">
      The HTML Element (or HTML Block Quotation Element)
      indicates that the enclosed text is an extended quotation.
      Usually, this is rendered visually by indentation
      (see Notes for how to change it). A URL for the source of
      the quotation may be given using the cite attribute,
      while a text representation of the source can be given using
      the &lt;cite&gt; element.
    </Blockquota>
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