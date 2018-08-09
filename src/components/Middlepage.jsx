import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Maps from "./Maps";
class Middlepage extends Component {
  constructor(props) {
    super(props);
    this.state = { person: "" };
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs style={{ height: 300,width:'20vw', }}>
            <h3>{this.props.name}</h3>
            <Maps
              latitude={this.props.latitude}
              longitude={this.props.longitude}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs>
            <h2 style={{ marginLeft: "2%" }}>Tasks</h2>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Middlepage;
