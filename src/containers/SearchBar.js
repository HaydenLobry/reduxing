import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather, chooseData } from '../actions/index';
import { TEMP, PRESSURE, HUMIDITY, CITY, COUNTRY, DATA_CONSTANTS } from '../constants';
import Checkbox from '../components/Checkbox';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      [CITY]: '',
      [COUNTRY]: 'AU',
      dataDisplay: {
        [TEMP]: true,
        [PRESSURE]: true,
        [HUMIDITY]: true
      }
    };
  }

  componentDidMount() {
    this.updateDataDisplay()
  }

  handleTextChange = (e) => {
    if (!(e.target.name === COUNTRY && e.target.value.length > 2)) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  handleCheck = (e) => {
    let object = this.state.dataDisplay
    object[e.target.name] = !this.state.dataDisplay[e.target.name]

    this.setState({
      dataDisplay: object
    },
      this.updateDataDisplay())
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.city &&
      this.state.country.length === 2 && 
      !this.cityAlreadyInList(this.props.cityData) && (
        this.state.dataDisplay[TEMP] ||
        this.state.dataDisplay[PRESSURE] ||
        this.state.dataDisplay[HUMIDITY]
      )) {
      this.props.fetchWeather(this.state.city, this.state.country);
      this.props.chooseData(this.state.dataDisplay)
      this.setState({
        city: ''
      })
    }
  }

  updateDataDisplay = () => {
    ( this.state.dataDisplay[TEMP] ||
      this.state.dataDisplay[PRESSURE] ||
      this.state.dataDisplay[HUMIDITY]
    ) ? this.props.chooseData(this.state.dataDisplay) : null
  }

  cityAlreadyInList = (cityData) => {
    if (cityData.length === 0 ) return false
    //return true if city already searched [false, true, false]
    //return false if not alreaday searched [false, false, false]
    return cityData.map( location => {
      return (
        this.state[CITY].toUpperCase() === location.city.name.toUpperCase() &&
        this.state[COUNTRY].toUpperCase() === location.city.country.toUpperCase()
      )
    }).some( exists => {
      return exists
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-sm-3 mb-2">
            <label className="my-1" htmlFor="inlineFormInputCity">
              Search for a city
            </label>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputCity"
              placeholder="City"
              onChange={this.handleTextChange}
              value={this.state.city}
              name={CITY}
            />
          </div>
          <div className="col-sm-2 mt-4">
            <label className="sr-only" htmlFor="inlineFormInputGroupCountry">
              Country Code
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">Country Code</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupCountry"
                placeholder="XX"
                onChange={this.handleTextChange}
                value={this.state.country}
                name={COUNTRY}
              />
            </div>
          </div>
          <div className="col-auto mt-4">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
        <div className="form-row mb-3 mt-1 ml-">
          <Checkbox
            name={TEMP}
            checked={this.state.dataDisplay[TEMP]}
            onChange={this.handleCheck}
            label={DATA_CONSTANTS[TEMP].name}
          />
          <Checkbox
            name={PRESSURE}
            checked={this.state.dataDisplay[PRESSURE]}
            onChange={this.handleCheck}
            label={DATA_CONSTANTS[PRESSURE].name}
          />
          <Checkbox
            name={HUMIDITY}
            checked={this.state.dataDisplay[HUMIDITY]}
            onChange={this.handleCheck}
            label={DATA_CONSTANTS[HUMIDITY].name}
          />
        </div>
      </form>
      </div>
    );
  }
}

const mapStateToProps = ({ cityData }) => {
  return {
    cityData
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather, chooseData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);