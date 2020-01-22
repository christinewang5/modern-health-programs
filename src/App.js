// src/App.js

// Import react and the component class
import React, { Component } from 'react';
// Import BrowserRouter
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import each component
import Home from './components/Home';
import Program from './components/Program';
import Section from './components/Section';

// Import css file
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/prog/:id" component={Program} />
          <Route exact path="/sec/:id" component={Section} />
        </div>
      </Router>
    )
  }
};

// Export the App component
export default App;