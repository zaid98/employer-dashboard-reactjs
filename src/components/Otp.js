import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import integrated from "./integrated";
import Grid from "@material-ui/core/Grid";
import Logo from "./sales_drive-min.jpg";

const styles = {
  logo:{
    width:'10%',
    height:'5%',
    marginBottom:'-2%',
  },
  card: {
    width: 500,
    height: 300,
    marginTop:'30%',
  },
  pos: {
    marginBottom: 12
  },
  button: {
    marginLeft: 280,
    borderRadius: '10%',
    backgroundColor:'#01b4e4',
  },
  phone: { width: 370 },
  cardcontent: { padding: 70 },
  tc:{
    textDecoration:'none',
    color:'#fff',
  },
  copyright:{
    color:'#fff',
    marginTop:75
  },
};

class SimpleCard extends Component{


render(){
    const { classes } = this.props;
  return (
    <div id="page1" style={
      {
        background: "linear-gradient(to bottom, #fff 50%,#01b4e4 50%)",
        height:'96vh',
      }
    }>
    <div><img className={classes.logo} src={Logo} /></div>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <div></div>
        </Grid>
        <Grid Item xs={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardcontent}>
          <Typography variant="headline" component="h2">
            Enter the OTP.
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Please enter the one time password
          </Typography>
          <TextField
            className={classes.phone}
            id="input-with-icon-textfield"
            placeholder="OTP"
          />
          <Typography
            className={classes.pos}
            color="textSecondary"
            align="center"
          >
            We have sent you a One Time Password (OTP) <br/>
            Haven't received it yet?
          </Typography>
          <CardActions>
            <Link to={'/integrated'}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              NEXT
            </Button>
          </Link>
          </CardActions>
        </CardContent>
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
  );}
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
