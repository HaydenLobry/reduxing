import React from 'react';
import { connect } from 'react-redux';
import { DATA_CONSTANTS } from '../constants'
import CityRow from '../components/CityRow';

const createCityRows = (cityData, dataTypes) => {
  return cityData.map( location => {
    const { city } = location
    return (
      <CityRow city={city}  key={city.name} dataTypes={dataTypes}/>
    );
  })
}

const createTableHeader = dataTypes => {
  return dataTypes.map( type => {
    return type ? (
      <th key={type}>{DATA_CONSTANTS[type].name}</th>
    ) : null
  })
}

const CityList = ({ cityData, dataTypes }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          {createTableHeader(dataTypes)}
        </tr>
      </thead>
      <tbody>
        {createCityRows(cityData, dataTypes)}
      </tbody>
    </table>
  );
}

const mapStateToProps = ({ cityData, dataTypes }) => {
  return {
    cityData,
    dataTypes
  }
}

export default connect(mapStateToProps)(CityList)