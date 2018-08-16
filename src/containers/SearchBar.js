import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  handleTextChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
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

const mapStateToProps = (state) => {
  return {
      
  }
}

connect(mapStateToProps)(SearchBar);

export default SearchBar;