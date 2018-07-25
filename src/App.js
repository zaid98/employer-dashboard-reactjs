import React, { Component } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
class App extends Component {
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
