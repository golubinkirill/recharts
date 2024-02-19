import React from "react";
import styles from "./css/lastGraph.css";

const LastGraph = ()=>{

    const LastSessionGraphData = localStorage.getItem('LastSessionGraphData');
    const LastSessionGraphType = localStorage.getItem('LastSessionGraphType');


    return(
        <div className="content">
            <div className="content-graph-preview">
            
            </div>
            <div className="content-graph-settings-menu">
            
            </div>
        </div>
    )

} 
export default LastGraph;