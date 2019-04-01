import React, {Component} from 'react';
import {Button} from "./react-wui";
import Header from "./doc/common/Header";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Button active={true} onClick={() => alert("hello")}>Hello</Button>
        </div>
    );
  }
}

export default App;
