import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Projects } from './Projects';
import { Background } from './Background';
import { Homepage } from './Homepage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Link to="/">Home</Link>
          { ' ' }
          <Link to="/projects">Projects</Link>
          { ' ' }
          <Link to="/background">Background</Link>
          <Route exact path="/" component={ Homepage } />
          <Route path="/projects" component={ Projects } />
          <Route path="/background" component={ Background } />
        </div>
      </Router>
    );
  }
}

export default App;
