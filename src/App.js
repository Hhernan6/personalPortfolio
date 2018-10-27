import React, { Component } from "react";
import "./assets/App.scss";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About/About";

import Home from "./components/Home/Home";
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5bd33044adf9f5652a65e946")
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
        <BrowserRouter>
          <div className="App">
            <Header />
            {/* <Switch> */}
              <main>
               
                <Route path="/" component={Home} exact/>
                <Route
                  path="/Projects"
                  render={() => <Projects projects={this.state.projects} />}
                />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
              </main>
            {/* </Switch> */}

           
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
