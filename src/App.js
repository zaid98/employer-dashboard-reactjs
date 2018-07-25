import React, { Component } from "react";
import "./App.scss";
import Login from "./Components/Login";
import Otp from "./Components/Otp";
import Sidebar from "./Components/Sidebar";
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
