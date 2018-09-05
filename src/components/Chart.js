import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const Chart = ({ data, color }) => {
  return (
    <Sparklines data={data} width={100} height={100}>
      <SparklinesLine color={color} />
    </Sparklines>
  )
}

export default Chart