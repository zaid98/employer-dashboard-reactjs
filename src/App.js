import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from "./components/Login";
import Otp from "./components/Otp";
import Tasks from "./components/Tasks";
import Landing from "./components/Landing";

class App extends Component{
  render(){
    return(
      <Router>
      <div className="App">
        {/* <ul>
          <li><Link to={'/'}>Landing</Link></li>
          <li><Link to={'/Login'}>Login</Link></li>
          <li><Link to={'/Tasks'}>Tasks</Link></li>
        </ul> */}

        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/Otp' component={Otp}/>
          <Route exact path='/Tasks' component={Tasks}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
