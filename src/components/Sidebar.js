import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Middlepage from "./Middlepage.jsx";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    // width: "20%",
    marginLeft: -8
  },
  appBar: {
    position: "absolute",
    backgroundColor: "#202020",
    height: "0%"
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    backgroundColor: "#4A4A4A"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    backgroundColor: "#202020",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#202020",
    width: "20%",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: "35%",
    backgroundColor: "#02b4e4"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  manager: {
    color: "white",
    marginRight: "30%"
  },
  drawerbody: {
    marginLeft: "10%",
    color: "white",
    cursor: "pointer"
  },
  searchfield: {
    // marginLeft: theme.spacing.unit,
    // marginRight: "50%",
    width: "95%",
    borderRadius: 10,
    border: "1.5px solid white",
    Color: "white",
    backgroundColor: "inherit",
    height: "6%",
    fontSize: 15,
    fontColor: "white"
  }
});
class PersistentDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: "left",
      showList: false,
      salesman: [],
      id: "0",
      latitude:"",
      longitude:"",
      name:"",
      managerPage: true,
      openProfile:false,
      openSettings:false,

    };
    this.AddNames = this.AddNames.bind(this);
  }
  showInfo(lat, long, name) {
   this.setState({
     latitude: lat,
     longitude: long,
     name: name
   });
 }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  AddNames = () => {
    this.setState({ showList: !this.state.showList });
  };
  show(val) {
    console.log(val);
  }
  onManagerPage() {
    this.props.managerpage(this.state.managerPage);
  }
  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;
    const { showList } = this.state;
    let idval = 1;
    let profile=null;
    let settings=null;

    if(this.state.openProfile){
      profile=(
        <div>
        <Profile/>
        </div>
      )
    }
    if(this.state.openSettings){
      settings=(
        <div>
        <Settings/>
        </div>
      )
    }
    const data = [{ name: "abc" }, { name: "czx" }];
    const listItems = data.map(d => <li key={d.name}>{d.name}</li>);
    return (
      <Grid container>
        <Grid item xs={3}>
          <div className={classes.root}>
            <div className={classes.appFrame}>
              <AppBar className={classNames(classes.appBar)}>
                <Toolbar disableGutters={!open}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(
                      classes.menuButton,
                      open && classes.hide
                    )}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" noWrap>
                    Aidapp
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="persistent"
                anchor={anchor}
                open={open}
                classes={{
                  paper: classes.drawerPaper
                }}
              >
                <div className={classes.drawerHeader}>
                  <Typography className={classes.manager}>Manager</Typography>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <div className={classes.drawerbody}>
                  <List onClick={() => this.setState({openProfile:!this.state.openProfile,openSettings:false})}>Profile</List>
                  <List>Team</List>
                  <List>Code</List>
                  <List onClick={()=> this.setState({openSettings:!this.state.openSettings,openProfile:false})}>Settings</List>
                </div>
              </Drawer>
              <main
                className={classNames(
                  classes.content,
                  classes[`content-${anchor}`]
                )}
              >
                <div className={classes.drawerHeader} />
                <Button
                  variant="fab"
                  mini
                  color="primary"
                  aria-label="Add"
                  onClick={this.AddNames}
                  className={classes.button}
                >
                  <AddIcon />
                </Button>
                <input
                  placeholder=" Search "
                  type="search"
                  className={classes.searchfield}
                  style={{ color: "white", textAlign: "center" }}
                />
                <Typography
                  style={{ color: "white" }}
                  className={classes.ListName}
                >
                  {showList && listItems}
                </Typography>
                <h2
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    marginTop: "25%",
                    fontSize: "135%",
                    wordSpacing: 1
                  }}
                >
                  Your company code is<br />
                </h2>
                <center>
                  <h1 style={{ color: "#01b4e4" }}>AID365</h1>
                </center>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "135%",
                    wordSpacing: 1
                  }}
                >
                  Your team members can join saledrive with this code.
                </h3>
                <Typography
                  style={{
                    color: "white",
                    backgroundColor: "#202020",
                    width: "100%"
                  }}
                >
                  <List>
                     {this.props.salesman.map(element => {
                       return (
                         <ListItem
                           key={element._id}
                           button
                           onClick={() => {
                             this.showInfo(
                               element.latitude,
                               element.longitude,
                               element.name
                             );
                           }}
                         >
                           <Avatar
                             style={{
                               marginRight: "10%"
                             }}
                           >
                             {element.name[0]}
                           </Avatar>
                           {element.name}
                         </ListItem>
                       );
                     })}
                   </List>
                </Typography>
              </main>
            </div>
          </div>
        </Grid>
        <Grid itm xs={9}>
          {profile}
          {settings}
          <Middlepage
           latitude={this.state.latitude}
           longitude={this.state.longitude}
           name={this.state.name}
         />
        </Grid>
      </Grid>
    );
  }
}
PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(PersistentDrawer);


// import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import { withStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import ListItem from "@material-ui/core/ListItem";
// import Divider from "@material-ui/core/Divider";
//
// const drawerWidth = 240;
// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   appFrame: {
//     height: "100%",
//     zIndex: 1,
//     overflow: "hidden",
//     position: "relative",
//     display: "flex",
//     // width: "20%",
//     marginLeft: -8
//   },
//   appBar: {
//     position: "absolute",
//     backgroundColor: "#202020",
//     height: "0%",
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     })
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   "appBarShift-left": {
//     marginLeft: drawerWidth
//   },
//   "appBarShift-right": {
//     marginRight: drawerWidth
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 20
//   },
//   hide: {
//     display: "none"
//   },
//   drawerPaper: {
//     position: "relative",
//     width: drawerWidth,
//     backgroundColor: "#4A4A4A"
//   },
//   drawerHeader: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     backgroundColor: "#202020",
//     ...theme.mixins.toolbar
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: "#202020",
//     width: "20%",
//     padding: theme.spacing.unit * 3,
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     })
//   },
//   "content-left": {
//     marginLeft: -drawerWidth
//   },
//   "content-right": {
//     marginRight: -drawerWidth
//   },
//   contentShift: {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   "contentShift-left": {
//     marginLeft: 0
//   },
//   "contentShift-right": {
//     marginRight: 0
//   },
//   button: {
//     margin: theme.spacing.unit,
//     marginLeft: "35%",
//     backgroundColor: "#02b4e4"
//   },
//   extendedIcon: {
//     marginRight: theme.spacing.unit
//   },
//   manager: {
//     color: "white",
//     marginRight: "30%"
//   },
//   drawerbody: {
//     marginLeft: "10%",
//     color: "white",
//     cursor: "pointer"
//   },
//   searchfield: {
//     // marginLeft: theme.spacing.unit,
//     // marginRight: "50%",
//     width: "95%",
//     borderRadius: 10,
//     border: "1.5px solid white",
//     Color: "white",
//     backgroundColor: "inherit",
//     height: "6%",
//     fontSize: 15,
//     fontColor: "white"
//     // padding: "10% 12%"
//   }
// });
// class PersistentDrawer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//       anchor: "left",
//       showList: false,
//       salesman: [],
//       id: "0"
//     };
//     this.AddNames = this.AddNames.bind(this);
//   }
//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };
//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };
//   AddNames = () => {
//     this.setState({ showList: !this.state.showList });
//   };
//   show(val) {
//     console.log(val);
//   }
//   // handleChangeAnchor = event => {
//   //   this.setState({
//   //     anchor: event.target.value
//   //   });
//   // };
//   render() {
//     const { classes, theme } = this.props;
//     const { anchor, open } = this.state;
//     const { showList } = this.state;
//     let idval = 1;
//     let hist = "";
//     const drawer = (
//       <Drawer
//         variant="persistent"
//         anchor={anchor}
//         open={open}
//         classes={{
//           paper: classes.drawerPaper
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <Typography className={classes.manager}>Manager</Typography>
//           <IconButton onClick={this.handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </div>
//         <div className={classes.drawerbody}>
//           <List >Profile</List>
//           <List>Team</List>
//           <List>Code</List>
//           <List>Settings</List>
//         </div>
//       </Drawer>
//     );
//     let before = null;
//     let after = null;
//     if (anchor === "left") {
//       before = drawer;
//     } else {
//       after = drawer;
//     }
//     {
//       /*Map property*/
//     }
//     const data = [{ name: "abc" }, { name: "czx" }];
//     const listItems = data.map(d => <li key={d.name}>{d.name}</li>);
//     return (
//       <Grid container>
//         <Grid item xs={3}>
//           <div className={classes.root}>
//             <div className={classes.appFrame}>
//               <AppBar
//                 className={classNames(classes.appBar, {
//                   [classes.appBarShift]: open,
//                   [classes[`appBarShift-${anchor}`]]: open
//                 })}
//               >
//                 <Toolbar disableGutters={!open}>
//                   <IconButton
//                     color="inherit"
//                     aria-label="Open drawer"
//                     onClick={this.handleDrawerOpen}
//                     className={classNames(
//                       classes.menuButton,
//                       open && classes.hide
//                     )}
//                   >
//                     <MenuIcon />
//                   </IconButton>
//                   <Typography variant="title" color="inherit" noWrap>
//                     Aidapp
//                   </Typography>
//                 </Toolbar>
//               </AppBar>
//               {before}
//               <main
//                 className={classNames(
//                   classes.content,
//                   classes[`content-${anchor}`],
//                   {
//                     [classes.contentShift]: open,
//                     [classes[`contentShift-${anchor}`]]: open
//                   }
//                 )}
//               >
//                 <div className={classes.drawerHeader} />
//                 <Button
//                   variant="fab"
//                   mini
//                   color="primary"
//                   aria-label="Add"
//                   onClick={this.AddNames}
//                   className={classes.button}
//                 >
//                   <AddIcon />
//                 </Button>
//                 <input
//                   placeholder=" Search "
//                   type="search"
//                   className={classes.searchfield}
//                   style={{ color: "white", textAlign: "center" }}
//                 />
//                 <Typography
//                   style={{ color: "white" }}
//                   className={classes.ListName}
//                 >
//                   {showList && listItems}
//                 </Typography>
//                 <h3
//                   style={{
//                     color: "#fff",
//                     fontWeight: "bold",
//                     marginTop: "25%",
//                     fontSize: "135%",
//                     wordSpacing: 1
//                   }}
//                 >
//                   Your company code is<br />
//                 </h3>
//                 <center>
//                   <h1 style={{ color: "#01b4e4" }}>AID365</h1>
//                 </center>
//                 <h3
//                   style={{
//                     color: "#fff",
//                     fontWeight: "bold",
//                     fontSize: "135%",
//                     wordSpacing: 1
//                   }}
//                 >
//                   Your team members can join saledrive with this code.
//                 </h3>
//                 <Typography
//                   style={{
//                     color: "white",
//                     backgroundColor: "#202020",
//                     width: "100%"
//                   }}
//                 >
//                   <List component="nav">
//                     {this.props.salesman.map(person => (
//                       <div>
//                         <ListItem
//                           key={person._id}
//                           button
//                           onclick={this.show(person._id)}
//                         >
//                           {person.name}
//                         </ListItem>
//                         <Divider />
//                       </div>
//                     ))}
//                   </List>
//                 </Typography>
//               </main>
//               {after}
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={9}>
//
//         </Grid>
//       </Grid>
//     );
//   }
// }
// PersistentDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired
// };
// export default withStyles(styles, { withTheme: true })(PersistentDrawer);
