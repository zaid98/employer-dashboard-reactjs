import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Plan.css';

class Plan extends Component{
  render(){
    return(
      <div class="PlanPage">
        <AppBar position="static" color="default" style={{marginLeft:'-2%',width:'98vw',height:50}}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{}}>
              Plan
            </Typography>
          </Toolbar>
        </AppBar>
        <Card class="Card1">
         <CardContent>
          <Typography variant="title">
              Free Trial
          </Typography>
          <Typography>
            You have 21 days left for free trial.
          </Typography>
        </CardContent>
      </Card>
      <Card class="Card1">
        <CardContent>
         <Typography variant="title">
             Current Plan
         </Typography>
         <Typography>
           You're currently subscribed to the Standard Plan.
           <br/>
           <b>Get in app messaging and unlimited users with the Unlimited Plan.</b>
           <CardActions>
             <Button>Change Your Plan</Button>
           </CardActions>
         </Typography>
       </CardContent>
      </Card>
      <Card class="Card1">
        <CardContent>
         <Typography variant="title">
            Payment
         </Typography>
         <Typography>
           Update your payment information.Amount will get deducted from 10/08/2018.
           <CardActions>
             <Button>Set Your Payment</Button>
           </CardActions>
         </Typography>
       </CardContent>
      </Card>
      </div>
    );
  }
}
Plan.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default Plan;
