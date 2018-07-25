import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
  page:{
    fontFamily:'Roboto',
  },
  card: {
    width: 500,
    height: 300,
    margin: "150px 30%",
    boxShadow:"111"
  },
  // textField: {
  //   width: 200,
  // },
  pos: {
    marginBottom: 12
  },
   button: {
      marginLeft: 280,
      borderRadius: 30,
      marginTop:-30
    },
      cardcontent: {
         padding: 70,
    },
    tc:{
      marginTop:-140,
      marginLeft:440,
      color:'#fff',
    },

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
        <div classesName={classes.page}>
          <Card className={classes.card}>
            <CardContent className={classes.cardcontent}>
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
              <Link to={'/Otp'}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.otpTrigger.bind(this)}
              >  Next
              </Button>
              </Link>
              {/* <Route exact path='/Otp' component={Otp}/> */}
            </CardActions>
          </Card>
          <h5 className={classes.tc}>ContactUs</h5>
      </div>
            );
    }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
