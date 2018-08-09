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
import Tasks from "./Tasks";
import integrated from "./integrated";
import Grid from "@material-ui/core/Grid";
import Logo from "./sales_drive-min.jpg";
import "./Otp.css";

const styles = {
  saledrive:{
    height:'130%',
    width:'40%',

  },
  card: {
    width: '110%',
    height: '73%',
    marginTop:'30%',
    color:'#000',
  },
  pos: {
    marginBottom: '2%',
    marginTop:'4%',

  },
  button: {
    marginLeft:'70%',
    marginBottom:'2%',
    width:'20%',
    color:'#fff',
    borderRadius: '5%',
    backgroundColor:'#01b4e4',
    textDecoration:'none',
  },
  phone: { width: 370 ,marginTop:'7%'},

  tc:{
    textDecoration:'none',
    color:'#fff',
  },
  copyright:{
    color:'#fff',
    marginTop:75
  },
  entirePage:{
    display:'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
		gridTemplateRows:  'repeat(3, minmax(150, auto))',
    background:'linear-gradient(to bottom, #fff 50%,#01b4e4 50%)',
    fontFamily:'Roboto',
    height:'96vh',
  },
  cardContents:{
    display:'grid',
    gridTemplateColumns:'repeat(3fr 1fr 1fr) ',
    gridTemplateRows:  'repeat(3, minmax(150, auto))',
  },
  textfield:{
    width:'80%',
    color:'#000',
  },
  pass:{
    marginBottom:'8%',
    marginTop:'1%',
  },

};

class SimpleCard extends Component{
render(){
    const { classes } = this.props;
  return (
      <div className={classes.entirePage}>
        <img src={Logo} className={classes.saledrive}/>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <Card className={classes.card}>
            <CardContent className={classes.cardcontent}>
             <Typography variant="display1" component="h1" style={{color:'#000',marginTop:'4.5%'}}>
               Enter the OTP.
             </Typography>
             <Typography></Typography>
             <Typography></Typography>
             <Typography className={classes.pass} color="textSecondary">
               Please enter the one time password
             </Typography>
             <TextField
               className={classes.textfield}
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
           </CardContent>
          <Link to={'/integrated'}>
            <Button
              variant="contained"
              className={classes.button}
            >NEXT</Button>
          </Link>
        </Card>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div style={{marginTop:'6%',color:'#fff'}}>ContactUs </div>
        <div style={{marginTop:'6%',color:'#fff',marginLeft:'-33%'}}>Terms of Service&nbsp;&nbsp;Privacy</div>
        <div></div>
        <div style={{textAlign:'center',marginTop:'18%',color:'#fff',}}>@Copyright Aidapp Intelligence Pvt.Ltd.2018</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>

      </div>
    );
  }
}

export default withStyles(styles)(SimpleCard);
