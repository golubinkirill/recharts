import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle } from 'recharts';;

const Graph = ()=>{

    const dispatch = useDispatch()
    const graphData = useSelector(state=>state.graphData.VALUES)
    const graphType = useSelector(state=>state.graphData.TYPE)

    const data = graphData.map((number, index) => ({
        name: index,
        uv: number
      }));

    return(
        <>
      <ResponsiveContainer width="90%" height="100%">
        <BarChart
          width={400}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
        </>
    )

} 
export default Graph;