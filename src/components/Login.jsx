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
    overflowX:'hidden !important' ,
  },
  card: {
    width: 500,
    height: 300,
    boxShadow:"111",
    marginTop:'30%',
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
      textDecoration:'none',
      color:'#fff',
    },
    copyright:{
      color:'#fff',
      marginTop:80
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
      <div classesName={classes.page}>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <div></div>
          </Grid>
          <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
          <div></div>
        </Grid>
      </Grid>
      <Grid container spacing={12}>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}><a href="#"><h5 className={classes.tc} style={{textDecoration:'none'}}>ContactUs</h5></a></Grid>
        <Grid item xs={1}><h5 className={classes.tc}>Terms Of Service</h5></Grid>
        <Grid item xs={1}><h5 className={classes.tc}>Privacy</h5></Grid>
        <Grid item xs={3}><h5></h5></Grid>
      </Grid>

        <center>
          <h5 className={classes.copyright}>@Copyright Aidapp Intelligence Pvt.Ltd.2018</h5>
        </center>
      </div>
        );
    }
}


SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
