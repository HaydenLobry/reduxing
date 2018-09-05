import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import CityList from '../containers/CityList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3 className="heading" >Get the weather outlook for major cities around the world!</h3>
        <SearchBar />
        <CityList />
      </div>
    );
  }
}
