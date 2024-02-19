import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PieChart, Pie,  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, LineChart, Line } from 'recharts';;

const Diagram = ()=>{

    const dispatch = useDispatch()
    const graphData = useSelector(state=>state.graphData.VALUES)
    const graphType = useSelector(state=>state.graphData.TYPE)

    const data = graphData.map((number, index) => ({
        name: `ksd-${index}`,
        value: Number(number)
      }));
    const data03 = data;
      console.log(data)

    return(
        <>
<ResponsiveContainer>
<PieChart width={730} height={250}>
  <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0} outerRadius={80} fill="#82ca9d" label />
</PieChart></ResponsiveContainer>
        </>
    )

} 
export default Diagram;