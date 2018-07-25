import React, { Component } from "react";
import "./App.scss";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Sidebar from "./components/Sidebar";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="hi">
        {/* <Login />
        {/* <Otp /> */}
        <Sidebar />
      </div>
    );
  }
}

export default App;
