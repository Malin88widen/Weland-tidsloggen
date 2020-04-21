import React, { Component } from "react";
import NavBar from "./components/navbarWelands";
import Counters from "./components/counters";
import "./App.css";
import HomePage from "./components/homePageWelands";

function Test(props){
  return <p>{props.test}</p>
}
function App(){
    return <div>
        <NavBar/>
        <br />
        <main className="homePageWelands">
        <h1><HomePage /></h1>
        <h1><Test test="testing1111" /></h1>
        </main>
    </div> 
}



export default App;
