import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import "./App.css";
import Saved from "./pages/Saved";
import Wrapper from "./components/Wrapper";


function App() {
  return (
  <Router>
    <div>
      <Nav />
      <Wrapper>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </Wrapper>     
    </div>
  </Router>
  )
}


export default App;
