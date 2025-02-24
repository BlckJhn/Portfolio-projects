import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis,ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import ReactDOM from 'react-dom';

export default function Chart({
  title,data,dataKey,grid
}) {
 
  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1} height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke='#8884d8'/>
        <Line type="monotone" dataKey={dataKey}stroke='#8884d8'/>
        <Tooltip/>
        { grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
