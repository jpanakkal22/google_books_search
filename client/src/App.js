import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import "./App.css";
import Saved from "./pages/Saved";



function App() {
  return (
  <Router>
    <div>
      <Nav />
      <Jumbotron />      
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
