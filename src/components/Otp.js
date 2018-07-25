import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Link } from 'react-router-dom';
const styles = {
  card: {
    width: 500,
    height: 300,
    margin: "150px 30%"
  },
  pos: {
    marginBottom: 12
  },
  button: {
    marginLeft: 280,
    borderRadius: 30
  },
  phone: { width: 370 },
  cardcontent: { padding: 70 }
};

class SimpleCard extends Component{
constructor(props){
  super(props);
}

render(){
    const { classes } = this.props;
  return (<div>
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
          <Link to={'/Tasks'}>  <Button
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
    </div>
  );
 }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
