import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class CityList extends Component {
  
  renderWeather(cityData) {
    const { city, list } = cityData;
    const temps = list.map(time => {
      return time.main.temp - 273.15;
    });
    const pressure = list.map(time => {
      return time.main.pressure;
    })
    const humid = list.map(time => {
      return time.main.humidity;
    })
    
    return (
      <tr key={city.name}>
        <td>
          <GoogleMap lat={city.coord.lat} lon={city.coord.lon} />
        </td>
        <td>
          <Chart data={temps} color="orange" unit={tempUnit}/>
        </td>
        <td>
          <Chart data={pressure} color="black" unit={pressUnit}/>
        </td>
        <td>
          <Chart data={humid} color="blue" unit={humidUnit}/>
        </td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature ({tempUnit})</th>
            <th>Pressure ({pressUnit})</th>
            <th>Humidity ({humidUnit})</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}      
        </tbody>
      </table>
    );
  }
}

const humidUnit = '%';
const pressUnit = "hPa";
const tempUnit = "C";

function mapStateToProps({ weather }) {
  return {
    weather 
  }
}

export default connect(mapStateToProps)(CityList);