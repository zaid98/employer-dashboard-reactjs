import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '40%',
    height:'50%',
    marginLeft:800,
    backgroundColor: theme.palette.background.red,
    marginTop:'-48%',
  },
  card:{
    height: 140,
  },
  card2:{
    height:120,
  },
  card3:{
    height:350,
  },
  button1:{
    marginLeft:14,
  },
  button3:{
    marginLeft:440,
    backgroundColor:'#fff',
    border: '2px solid #10B4E4',
    padding:'5px 20px 5px 20px',
    color:'#01b4e4',
  },
  bootstrapRoot: {
   padding: 0,
   'label + &': {
     marginTop: theme.spacing.unit * 3,
   },
 },
 bootstrapInput: {
   borderRadius: 4,
   marginLeft:24,
   backgroundColor: theme.palette.common.white,
   border: '1px solid #ced4da',
   fontSize: 16,
   padding: '7px 1px',
   width: 490,
   transition: theme.transitions.create(['border-color', 'box-shadow']),
   fontFamily: [
     'Roboto',
   ].join(','),
   '&:focus': {
     borderColor: '',
     boxShadow: '0 0 0 0.2rem rgba(150,150,150,.25)',
   },
 },
 bootstrapInput2: {
   borderRadius: 4,
   marginLeft:24,
   backgroundColor: theme.palette.common.white,
   border: '1px solid #ced4da',
   fontSize: 16,
   padding: '1% 2%',
   width: 450,
   height: 180,
   transition: theme.transitions.create(['border-color', 'box-shadow']),
   fontFamily: [
     'Roboto',
   ].join(','),
   '&:focus': {
     borderColor: '',
     boxShadow: '0 0 0 0.2rem rgba(150,150,150,.25)',
   },
 },

});

class SearchBar extends Component{
  constructor(props){
    super(props);
}
  render(){
    return(
      <div><input placeholder="SearchBar"/>helloworld</div>
    );
  }
}
class Tasks extends Component {
  constructor(props){
    super(props);
      this.state={
        showSearchBar:false
      };
      this.Assign=this.Assign.bind(this);
    }
    Assign(){
      this.setState({showSearchBar:true});
    }
  render(){
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
             <CardContent>
               <Typography variant="headline" component="h2">
                 Assign a new task to
               </Typography>
               <Typography className={classes.title} color="textSecondary">
                 Click on 'Add Assignee' to assign a new task to a team member
               </Typography>
             </CardContent>
           <CardActions>
             <Link to={'/SearchBar'}>
               <Button
                 onCick={this.Assign.bind(this)}
                 variant="contained"
                 color="primary"
                 size="small"
                 className={classes.button1}
               > Add Assignee+
             </Button>
           </Link>

             {/* {!this.state.showSearchBar} ? (
             <Button
               onCick={this.Assign.bind(this)}
               variant="contained"
               color="primary"
               size="small"
               className={classes.button1}
             > Add Assignee+
           </Button>):
           (<SearchBar/>); */}


           </CardActions>
         </Card>

      <Divider />

      <Card className={classes.card2}>
      <CardContent>
        <Typography variant="headline" component="h2">
          Add a task Title
        </Typography>
      </CardContent>
   <TextField
   defaultValue="Title..."
   id="bootstrap-input"
   InputProps={{
     disableUnderline: true,
     classes: {
       root: classes.bootstrapRoot,
       input: classes.bootstrapInput,
     },
   }}
   >
   </TextField>
   </Card>

   <Divider/>

   <Card className={classes.card3}>
     <CardContent>
       <Typography variant="headline" component="h2">
         Describe The task in the<br/> space below
       </Typography>
     </CardContent>
     <TextField
       defaultValue="Title..."
       id="bootstrap-input"
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.bootstrapRoot,
          input: classes.bootstrapInput2,
        },
      }}
      >
     </TextField>
     <CardActions>
       <Button
         variant="contained"
         size="small"
         className={classes.button3}
       > Done
     </Button>
     </CardActions>
   </Card>
    </div>
  );
}
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tasks,SearchBar);
