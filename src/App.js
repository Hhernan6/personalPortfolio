import React, { Component } from "react";

import "./assets/App.scss";
import Home from "./components/Home/home";
import Header from "./components/Header/Header";
// import {Projects} from './json.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
   componentDidMount() {
    fetch("https://api.jsonbin.io/b/5bb7cc37a97c597b3c6069fd/6")
      .then(response => response.json()).then(res => { 
        this.setState({
       projects: res
      })
    })

  }

  render() {
    
    console.log(this.state.data)
    return (
      <div className="App">
        <Header />
        <Home projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
