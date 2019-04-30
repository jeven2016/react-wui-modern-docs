import React, {Component} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {gruvboxDark as sty} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class CodeTemplate extends Component {

  render() {
    return <div style={{fontSize: "0.75rem"}}>
      <SyntaxHighlighter language='javascript|html'
                         style={sty}>
        {this.props.code}
      </SyntaxHighlighter>
    </div>;
  }

}