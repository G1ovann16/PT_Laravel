import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Home } from './components/Home';
import { Login } from './components/Login';


function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <NavLink to="/home" className="btn btn-light" activeClassName="active">
            Home
          </NavLink>    
          <NavLink to="/" className="btn btn-light" activeClassName="active">
            Login
          </NavLink> 
         </div>   
     <Switch>
       <Route path="/" exact>
          <Login />
       </Route>
       <Route path="/home">
        <Home/>
       </Route>
     </Switch>

     </div>
    </Router>
  );
}

export default App;
