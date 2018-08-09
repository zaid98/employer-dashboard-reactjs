import React, { Component } from "react";
import PersistentDrawer from "./Sidebar";
import Tasks from "./Tasks";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
class Integrated extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "20", salesman: [],openProfile:false };
  }

  componentDidMount() {
    axios
      .get(`http://18.218.234.34:8095/api/salesman/company_code/TES480/`)
      .then(res => {
        const salesman = res.data;
        this.setState({ salesman });
      });
  }
  onClickSalesman(pid) {
    this.setState({ id: pid });
  }
  render() {
    let tasks=null;
    if(this.props.openProfile){
      tasks=(
        <div>
        <Tasks/>
        </div>
      )
    }
    return (
      <div>
        <Grid container>
          <Grid item xs={8}>
            <PersistentDrawer salesman={this.state.salesman} />
          </Grid>
          <Grid item xs={4}>
          <Tasks/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Integrated;


// import React, {Component} from 'react';
// import Sidebar from './Sidebar';
// import Tasks from './Tasks';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Maps from './Maps';
// import Profile from './Profile';
//
// class Integrated extends Component {
//   render() {
//     return (
//       <div class = "integrated" >
//      <div id="a">
//         <Sidebar/>
//       </div>
//       <div id="b">
//         <Tasks/>
//       </div>
//       <Link to={'/Profile'}>
//       <button style={{marginLeft:'30%'}}>next</button>
//     </Link>
//       </div>
//   );
//   }
// }
//
// export default Integrated;
