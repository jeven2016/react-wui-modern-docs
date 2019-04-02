import React, {Component} from 'react';
import Header from "./doc/common/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./doc/common/Home";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            {/*<Route path="/movie" component={MainMovie}/>*/}
          </div>
        </Router>
    );
  }
}

export default App;
