import React, { Component } from 'react';
import './navbar.scss';
import NavbarTitle from './navbar-title/navbar-title';

export default class Navbar extends Component {

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-inner'>  
          <NavbarTitle title='Family Tree'></NavbarTitle>
        </div>
      </div>
    );
  }
}