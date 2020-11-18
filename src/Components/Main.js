import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from "@material-ui/icons/Mail";
import { Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Dashboard from "../Screens/Dashboard";
import Stories from "../Screens/Stories";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // backgroundColor: "#24d8a6",
    backgroundColor: "#222",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "#222",
    // backgroundColor: "#24d8a6",
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
  list:{
    color: '#fff'
  },
  profile: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "column",
    color: '#ddd',
    marginTop: "10px"
  }
}));

export default function Main() {
  const classes = useStyles();
  let history = useHistory()
/*
*/
  return (
    <div className={classes.root}>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.profile}>
          <AccountCircleIcon style={{ fontSize: 100 }} />
          <h4>Admin</h4>
        </div>
        <Divider />
        <List className={classes.list}>
          <ListItem button >
            <ListItemIcon className={classes.list}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="DashBoard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list}>
              <LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Stories" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list}>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list}>
              <NotificationsActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Send Notification" />
          </ListItem>
        </List>

        <Divider />
        <List className={classes.list}>
          <ListItem button >
            <ListItemIcon className={classes.list}>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText onClick={()=> history.push('/stories')} primary="Add a Story" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list}>
              <QueuePlayNextIcon />
            </ListItemIcon>
            <ListItemText primary="Add a Video" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <Router>
          <Switch>
            <Route path="/stories">
              <Stories />
            </Route>

            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}
