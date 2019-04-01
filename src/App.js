import React, { Component } from 'react';
import {Button} from "./react-wui";

class App extends Component {
  render() {
    return (
      <div>

        <Button active={true} onClick={()=>alert("hello")}>Hello</Button>
      </div>
    );
  }
}

export default App;
