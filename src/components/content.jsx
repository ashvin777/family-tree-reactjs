import React, { Component } from 'react';
import SearchBar from './searchbar';

export default class Content extends Component {

  render() {
    return (
      <div className="content">
        <SearchBar></SearchBar>
      </div>
    );
  }
}