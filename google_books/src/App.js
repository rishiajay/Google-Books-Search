// obtained code from 11 - Stu_ReactRouter
import React from 'react';
import logo from './logo.svg';
import './App.css';
// using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
