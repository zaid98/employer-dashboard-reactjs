import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from "./components/Login";
import Otp from "./components/Otp";
import Tasks from "./components/Tasks";
import Landing from "./components/Landing";
import integrated from "./components/integrated";
import Sidebar from "./components/Sidebar";
import Maps from "./components/Maps";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Plan from "./components/Plan";

class App extends Component{
  render(){
    return(
      <Router>
      <div className="App" >
        <Switch>
          <Route exact path='/Tasks' component={Tasks}/>
          <Route exact path='/Sidebar' component={Sidebar}/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/Otp' component={Otp}/>
          <Route exact path='/integrated' component={integrated}/>
          <Route exact path='/sidebar' component={Sidebar}/>
          <Route exact path='/Maps' component={Maps}/>
          <Route exact path='/Settings' component={Settings}/>
          <Route exact path='/Profile' component={Profile}/>
          <Route exact path='/Plan' component={Plan}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
