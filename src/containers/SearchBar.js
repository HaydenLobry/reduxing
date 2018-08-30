import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.searchText);
    this.setState({
      searchText: ''
    })
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);