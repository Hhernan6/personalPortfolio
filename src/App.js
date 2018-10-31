import React, { Component } from "react";
import "./assets/App.scss";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

import About from "./components/About/About";

import Hero from "./components/Home/Hero";
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5bd33044adf9f5652a65e946/4")
      .then(response => response.json())
      .then(res => {
        this.setState({
          projects: res
        });
      });
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  render() {
    console.log(this.state.projects);
    return (
      <div>

          <div className="App">
            <Header />

            {/* <Switch> */}
              <main>
                <Hero />
                
               
  
              </main>
            {/* </Switch> */}

           
          </div>

      </div>
    );
  }
}

export default App;
