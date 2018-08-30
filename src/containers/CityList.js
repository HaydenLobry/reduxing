import React from 'react';
import { connect } from 'react-redux';

const createCityRows = cityData => {
  return cityData.map(location => {
    const name = location.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  })
}

const CityList = ({ cityData }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {createCityRows(cityData)}
      </tbody>
    </table>
  );
}

const mapStateToProps = ({ cityData }) => {
  return {
    cityData
  }
}

export default connect(mapStateToProps)(CityList)