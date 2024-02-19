import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, LineChart, Line } from 'recharts';;

const LineGraph = ()=>{

    const dispatch = useDispatch()
    const graphData = useSelector(state=>state.graphData.VALUES)
    const graphType = useSelector(state=>state.graphData.TYPE)

    const data = graphData.map((number, index) => ({
        name: index,
        uv: number
      }));

    return(
        <>
        <LineChart width={1490} height={380} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3}/>
        </LineChart>
        </>
    )

} 
export default LineGraph;