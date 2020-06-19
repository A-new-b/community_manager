import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link, useHistory} from "react-router-dom"

const useStyle = makeStyles(theme => ({}));


export function NavDrawer() {
    // const history = useHistory();
    let history = useHistory();
    return (
        <div>
            <ListItem button onClick={() => {
                history.push('/home/announcement')
            }}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="公告栏" />
            </ListItem>
            <ListItem button onClick={() => {
                history.push('/home/health')
            }}>
                <ListItemIcon>
                    <ShoppingCartIcon/>
                </ListItemIcon>
                <ListItemText primary="健康数据" />

            </ListItem>
            <ListItem button onClick={() => {
                history.push('/home/log')
            }}>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="日志" />

            </ListItem>
        </div>
    )
}
