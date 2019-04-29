import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {ocean as sty} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class CodeTemplate extends Component {

  render() {
    return <div style={{fontSize: "0.75rem"}}>
      <SyntaxHighlighter language='javascript'
                              style={sty}>{this.props.code}</SyntaxHighlighter>
    </div>;
  }

}