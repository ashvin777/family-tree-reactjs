import React, { Component } from 'react';

import Content from './content';
import Navbar from './navbar'

export default class App extends Component {

  render() {
    return (
      <div className='page'>
        <Navbar></Navbar>
        <Content></Content>
      </div>
    );
  }

}