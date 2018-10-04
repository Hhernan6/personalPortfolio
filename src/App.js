import React, { Component } from 'react';

import './assets/App.scss';

import Header from './components/Header/Header'
import Home from './components/Home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Home />

      </div>
    );
  }
}

export default App;
