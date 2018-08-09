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
import Logo from './sales_drive-min.jpg';

const styles = {

    /*new*/
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
      width:'50%',
      color:'#000',
    },
    pass:{
      marginBottom:'2%',
      marginTop:'1%',
    },
};


class SimpleCard extends Component {
 constructor(props) {
    super(props);
    this.state={
      otpcalling:false,
      number:'',
      number_error_text:null,
      disabled:true}
 }

 // setButtonStatus=()=>{
 //   if(this.state.number.length>=12){
 //     this.setState({disabled:false});
 //   }
 //   else{
 //     this.setState({disabled:true});
 //   }
 // }
 // isDisabled=()=>{
 //   if(this.state.number===10)
 //   {
 //     this.setState({disabled:false});
 //   }
 //   else{
 //     this.setState({disabled:true});
 //   }
 // }

   // let numberIsValid=false;
   //
   // if(this.state.number===''||!this.state.number){
   //   this.setState({
   //     number_error_text:null
   //   });
   // }
   // else{
   //   if(this.state.number.length>=10){
   //     numberIsValid=true
   //     this.setState({
   //       number_error_text:null
   //     });
   //   }else{
   //     this.setState({
   //       number_error_text:'Sorry,this is not a valid number '
   //     });
   //   }
   // }
   // if(numberIsValid){
   //   this.setState({
   //     disabled:false
   //   });
   // }
 //}
 // changeValue(e,type){
 //   const value=e.target.value;
 //   const nextState={};
 //   nextState[type]=value;
 //   this.setState(nextState,()=>{
 //     this.isDisabled()
 //   });
 // }


  render (){
    let {number,number_error_text,disabled}=this.state;
    const { classes } = this.props;
    return(
      <div className={classes.entirePage}>
        <img src={Logo} className={classes.saledrive}/>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <Card className={classes.card}>
            <CardContent className={classes.cardcontent}>
             <Typography variant="display1" component="h1" style={{color:'#000',marginTop:'4.5%'}}>
               Welcome Back!
             </Typography>
             <Typography className={classes.pass} color="textSecondary">
               Please enter your phone number to login
             </Typography>
         <Grid container spacing={8} alignItems="flex-end">
             <Grid item>
               <AccountCircle />  +91
             </Grid>
             <Grid item>
               <TextField
                 className={classes.phone}
                 label="Enter your number"
                 type="tel"
                 errorText={this.state.number_error_text}
                 // onChange={e => this.changeValue(e,'number')}
                 onKeyUp="setButtonStatus(this,btnButton)"
                 required />
             </Grid>
           </Grid>
             <Typography
               className={classes.pos}
               color="textSecondary"
               align="center"
             >
               &nbsp;&nbsp; <br/>
               &nbsp;&nbsp;
             </Typography>
           </CardContent>
          <Link to={'/Otp'}>
            <Button
              variant="contained"
              className={classes.button}
              disabled="false"
              id="btnButton"
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


SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
