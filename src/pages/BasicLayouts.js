import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import {Announcement} from "./subpages/announcement";
import {Information} from "./subpages/Information";
import {AccessAlarm, ThreeDRotation} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

function getPageInfoByPathName(pathname){
    if(pathname === '/home/announcement'){
        return '公告'
    } else if (pathname === '/home/health'){
        return '健康数据'
    }
}

export function BasicLayouts(props) {
    let history = useHistory();
    let location = useLocation();
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [username,setUsername]=React.useState("");
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                <ListItem button key={1} onClick={() => {
                    history.push('/home/announcement')
                }}>
                    <ListItemIcon><AccessAlarm/></ListItemIcon>
                    <ListItemText primary={"公告栏"}/>
                </ListItem>
                <ListItem button key={2} onClick={() => {
                    history.push('/home/health')
                }}>
                    <ListItemIcon><ThreeDRotation/></ListItemIcon>
                    <ListItemText primary={"健康数据"}/>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const exit = () =>{
        document.cookie="";
        localStorage.clear();
        props.history.push("/login")
    };

    useEffect(
        ()=>{
            if (localStorage.getItem("username")===null)
            {
                props.history.push('/login');
            }
            else {
                setUsername(localStorage.getItem("username"))
            }
        }
    );
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar style={{display: 'block'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <h2 style={{display: 'inline-block'}}>{getPageInfoByPathName(location.pathname)}</h2>
                    <div style={{float: 'right', margin: '22px 0'}}>
                        <div style={{display:'inline-block',margin:'0 10px'}}>
                            {username}
                        </div>
                        <div style={{display:'inline-block', cursor: 'pointer'}} onClick={exit}>
                            退出
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content} style={{'width': '100%'}}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route path='/home/announcement' component={Announcement}/>
                    <Route path='/home/health' component={Information}/>
                </Switch>
            </main>
        </div>
    );
}
