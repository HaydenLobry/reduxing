import React from 'react'
import Chart from '../components/Chart';
import { DATA_CONSTANTS } from '../constants'

const CityRow = ({ city, dataTypes }) => {
  return (
    <tr>
      <td>{`${city.name}, ${city.country}`}</td>
      {dataTypes.map(type => {
        return type ? (
          <td key={type}>
            <Chart data={location[type]} color={DATA_CONSTANTS[type].color}/>
          </td>
        ) : null
      })}
    </tr>
  )
}

export default CityRow