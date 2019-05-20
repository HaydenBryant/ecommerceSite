import React, { Component } from 'react';
import {BrowserRouter, Route, Switch}  from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <Navbar />
          <div className="container">
            <Route exact path="/post" component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
