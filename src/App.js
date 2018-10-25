import React, { Component } from "react";
import "./assets/App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5bb7cc37a97c597b3c6069fd/16")
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

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
