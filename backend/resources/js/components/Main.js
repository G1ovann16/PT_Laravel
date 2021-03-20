import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./users/Form"
import List from "./users/List"
import Edit from "./users/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  
function Main(){
  return (
    <Router>
      <main>
        <Nav/>
        <Switch>
          <Route path="/users/index" exact component={List} />
          <Route path="/users/form"  component={Form} />
          <Route path="/users/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  )
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById('main-users'));