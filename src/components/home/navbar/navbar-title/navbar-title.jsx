import React, { Component } from 'react';
import './navbar-title.scss';

export default class NavbarTitle extends Component {

  render() {
    return (
      <div className='navbar-title'>{this.props.title}</div>
    );
  }
}