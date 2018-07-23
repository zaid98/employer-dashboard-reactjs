import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Otp from "./Otp";
const styles = {
  body: {
    background: ""
  },
  card: {
    Width: "10vw",
    height: "45vh",
    top: "20vw",
    position: "relative",
    width: "30vw",
    boxShadow:
      "#111"
  },
  textField: {
    width: 200
  } /*
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(1)',
  },*/,
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    marginLeft: "22vw"
  }
};

 
class SimpleCard extends Component {
 constructor(props) {
    super(props);
    this.state={otpcalling:false}
 }
  otpTrigger() {
    this.setState({ otpcalling: true });
  }
  
  render (){
    const { classes } = this.props;
    return(
    <div className="body">
      <div>
        <center>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="headline" component="h2">
                Welcome Back!
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Please enter your mobile number!
              </Typography>
              <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="Enter your number" />
                  </Grid>
                </Grid>
              </div>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.otpTrigger.bind(this)}
              >
              {/* If state shows that otpcalling is true, it'll render this component */}
              {this.state.otpcalling && 
              <Otp/>
              }
                Next
              </Button>
            </CardActions>
          </Card>
        </center>
      </div>
    </div>
            );
    }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
