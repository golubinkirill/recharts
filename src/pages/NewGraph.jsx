import React, {useState} from "react";
import styles from "./css/newGraph.css";
import { useDispatch, useSelector } from "react-redux";
import Graph from "../components/Graph";
import LineGraph from "../components/LineGraph";
import Diagram from "../components/Diagram";
import {saveSvgAsPng} from "save-svg-as-png";

const NewGraph = ()=>{

    const [inputs, setInputs] = useState([]);
    const [type, setType] = useState([]);
    const [stype, setsType] = useState('');
    const [_message, setMessage] = useState('');
    
    const dispatch = useDispatch();

    const graphData = useSelector(state=>state.graphData.VALUES)
    const graphType = useSelector(state=>state.graphData.TYPE)

    

    const handleAddInput = () => {
        setInputs([...inputs, '']);
      };

      const handleChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
      };

      const handleSelectChange = (value) => {
        setType(value);
      };

      const handleSelectChange_valueType = (value) =>{
        setsType(value)
      }

      function createGraph(value_amount){
        dispatch({type:'CHANGE_GRAPH_VALUES', LISTS:inputs, TYPE:type});
      }

      function safeGraph(){

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0'); 
        const minutes = String(now.getMinutes()).padStart(2, '0'); 
        const day = String(now.getDate()).padStart(2, '0'); 
        const month = String(now.getMonth() + 1).padStart(2, '0'); 
        const year = now.getFullYear(); 
      
        localStorage.setItem('LastSessionGraphData', inputs);
        localStorage.setItem('LastSessionGraphType', graphType);
        localStorage.setItem('LastSessionGraphValuesAmount', stype);
        localStorage.setItem('LastSessionTime', `${hours}:${minutes} ${day}.${month}.${year}`);
      }

      function loadGraph(){
        const LastSessionGraphData = localStorage.getItem('LastSessionGraphData');
        const LastSessionGraphType = localStorage.getItem('LastSessionGraphType');
        const LastSessionTime = localStorage.getItem('LastSessionTime');
        setsType(localStorage.getItem('LastSessionGraphValuesAmount'));
        dispatch({type:'CHANGE_GRAPH_VALUES', LISTS:LastSessionGraphData.split(',').map(Number), TYPE:type});
        setInputs(LastSessionGraphData.split(','))
        setMessage(`Вы успешно загрузили последний график (${LastSessionTime})`)
      }

      function downloadGraph(){
        saveSvgAsPng(document.getElementsByClassName("recharts-surface")[0], "exported_graph.png");
      }

    return(
        <div className="content">
            <div className="content-graph-preview">
                {graphType=='pole-graph'?<Graph/>:console.log('')}
                {graphType=='line-graph'?<LineGraph/>:console.log('')}
                {graphType=='diagramm'?<Diagram/>:console.log('')} 
            </div>

            <div className="content-graph-settings-menu">

                <div className="graph-settings-inputs">
                    <button onClick={handleAddInput}>Создать значение</button>
                        {inputs.map((value, index) => (
                            <input
                            key={index}
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
                            placeholder="Введите значение"
                            />
                        ))}
                </div>

                <div className="graph-settings-style" >
                        <select onChange={(e) => handleSelectChange(e.target.value)}>
                        <option value={'diagramm'}>Диаграмма</option>
                        <option value={'line-graph'}>Линейный График</option>
                        <option value={'pole-graph'}>Столбцовый График</option>
                        </select>
                        <select onChange={(e) => handleSelectChange_valueType(e.target.value)}>
                        <option value={'default'}>Обычный график</option>
                        <option value={'2r'}>График с двуми значениями</option>
                        <option value={'3r'}>График с тремя значениями</option>
                        </select>
                        {_message}
                </div>
                    <div className="graph-settings-buttons-funcs">
                        <div className="graph-create-button"><button onClick={()=>createGraph(stype)}>Применить</button></div>

                        <div className="graph-create-button"><button onClick={()=>safeGraph()}>Сохранить</button></div>

                        <div className="graph-create-button"><button onClick={()=>loadGraph()}>Открыть последний</button></div>

                        <div className="graph-create-button"><button onClick={()=>downloadGraph()}>Скачать график</button></div>
                    </div>
            </div>
        </div>
    )

} 
export default NewGraph;