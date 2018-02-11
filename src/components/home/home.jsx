import React, { Component } from 'react';
import './home.scss';

import Navbar from './navbar/navbar';
import Content from './content/content';

export default class Home extends Component {

  render() {
    return (
      <div className='page page-home'>
        <Navbar></Navbar>
        <Content></Content>
      </div>
    );
  }
  
}