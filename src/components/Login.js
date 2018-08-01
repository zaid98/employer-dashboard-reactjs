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
logo:{
  width:'10%',
  height:'5%',
  marginBottom:'-2%',
},
  page:{
    fontFamily:'Roboto',
    backgroundColor:'linear-gradient(to bottom, #fff 50%,#01b4e4 50%)',
  },
  card: {
    width: '110%',
    height: '70%',
    boxShadow:"111",
    marginTop:'32%',
  },
  // textField: {
  //   width: 200,
  // },
  pos: {
    marginBottom: 12
  },
   button: {
      marginLeft: '520%',
      borderRadius: '10%',
      marginTop:-30,
      backgroundColor:'#10b4e4',
    },
      cardcontent: {
         padding: 70,
    },
    phone:{
      width:'160%',
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
    this.state={otpcalling:false,number:'',number_error_text:null,disabled:true}
 }
 isDisabled(){
   let numberIsValid=false;

   if(this.state.number===''||!this.state.number){
     this.setState({
       number_error_text:null
     });
   }
   else{
     if(this.state.number.length>=10){
       numberIsValid=true
       this.setState({
         number_error_text:null
       });
     }else{
       this.setState({
         number_error_text:'Sorry,this is not a valid number '
       });
     }
   }
   if(numberIsValid){
     this.setState({
       disabled:false
     });
   }
 }
 changeValue(e,type){
   const value=e.target.value;
   const nextState={};
   nextState[type]=value;
   this.setState(nextState,()=>{
     this.isDisabled()
   });
 }
 submit(){

 }

  render (){
    let {number,number_error_text,disabled}=this.state;
    const { classes } = this.props;
    return(
      <form>
        <div classesName={classes.page} style={
          {
            background: "linear-gradient(to bottom, #fff 50%,#01b4e4 50%)",
            height:'96vh',
          }
        } >
        <div><img className={classes.logo} src={Logo} /></div>
        <Grid container spacing={12}>
          <Grid item xs={4}>
            <div></div>
          </Grid>
          <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardcontent}>
              <Grid item>
              <Typography variant="headline" component="h2">
                Welcome Back!
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.pos} color="textSecondary">
                Please enter your mobile number!
              </Typography>
            </Grid>
              <div className={classes.margin}>
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
                      onChange={e => this.changeValue(e,'number')}
                      required />
                  </Grid>
                </Grid>
              </div>
            </CardContent>
            <CardActions>
              <Link to={'/Otp'}>
              <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.submit.bind(this)}
                disabled={this.state.disabled}
              >  Next
              </Button>
            </Grid>
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
    </form>
        );
    }
}


SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
