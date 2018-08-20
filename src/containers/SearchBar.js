import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleTextChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          value={this.state.term}
          placeholder="Get the weather forecast for a city"
          onChange={this.handleTextChange}/>
        <span className="input-group-button">
          <button
            type="submit"
            className="btn btn-secondary"
            >
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);