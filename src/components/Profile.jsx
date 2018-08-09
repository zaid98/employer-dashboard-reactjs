import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import './Profile.css';
import ProfilePic from './Divyansh-min.png';

class Profile extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="" style={{marginLeft:'2%',}}>
        <AppBar position="static" color="default" style={{marginLeft:'-2%'}}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Edit Account
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="title" style={{fontWeight:400,color:'grey',marginTop:'3%'}}>Profile Picture</Typography>
        <br/><img src={ProfilePic} style={{height:'10%', width:'10%',borderRadius:'100%'}}/>
        <br/><br/>
        Name
        <br/><br/>
        <input
          type="text"
          style={{width:'50%',paddingTop:'.6%',paddingBottom:'.6%',borderRadius:4,border:'1px solid #ccc',}}
          placeholder="&nbsp;&nbsp;Name..."
        />
        <br/><br/>
        Number
        <br/><br/>
        <input
          type="number"
          style={{width:'50%',paddingTop:'.6%',paddingBottom:'.6%',borderRadius:4,border:'1px solid #ccc',}}
          placeholder="&nbsp;&nbsp;Number..."
        />
      </div>
    );
  }
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default Profile;
