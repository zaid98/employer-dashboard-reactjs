import React, { Component } from "react";
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Landing extends Component{
  constructor(props)
  {
    super(props);
  }
  render(){
    return(<div>

      <h1>Landing page</h1>
       <button ><Link to ={"/Login"} >Get Started</Link></button>
    </div>);
  }
}
export default Landing;
