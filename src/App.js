import React, { Component } from "react";
import "./assets/App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5bb7cc37a97c597b3c6069fd/12")
      .then(response => response.json())
      .then(res => {
        this.setState({
          projects: res
        });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
      <Header />
        <main>
          <Hero />
          <Project projects={this.state.projects}/>
          <About/>
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
