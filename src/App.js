import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav/Nav'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div style={styles.app} className="App">
       <Nav/>
       {Routes}
      </div>
    );
  }
}

export default App;

let styles = {
  app: {
    background: 'linear-gradient(to right, #FF70A6, #FF9770, #FFD670, #E9FF70',
    height: '100vh'
  }
}