import React from "react";
import styles from "./css/Header.css";

const Header = ()=>{

    return(
        <div className="header">
            <div className="header-logo"><h1>QuickGraph</h1></div>
            <div style={{marginRight:'40px', fontSize:'20px'}}><a href='./login'
             style={{textDecoration:'none', color:"white"}}>Sign Up</a></div>
        </div>
    )

} 
export default Header;