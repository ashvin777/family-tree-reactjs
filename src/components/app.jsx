import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home/home';

import './app.scss';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className='navigator'>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}