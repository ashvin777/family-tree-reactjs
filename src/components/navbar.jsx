import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="title">Your family</div>
        <div className="subtitle">
          <span>250 members</span>
        </div>
        <div className="profile"></div>
      </div>
    );
  }

}