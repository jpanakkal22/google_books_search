import React from "react";
import Jmbotron from "./components/Jmbotron";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (       
    <Router>  
      <Nav /> 
      <Jmbotron />         
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />       
    </Router>   
  )
}

export default App;
