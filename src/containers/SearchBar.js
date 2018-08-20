import React, { Component } from 'react';
// import connect from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          value={this.state.searchText}
          placeholder="Search for a city"
          onChange={this.handleSearchChange}
          className="form-control"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}



export default SearchBar;