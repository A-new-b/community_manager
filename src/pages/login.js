import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useSnackbar} from "notistack";

import {Copyright} from "../components/Copyright";

import {login} from "../api/normal";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export function Login(props) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [account,setAccount]=useState("");
    const [password,setPassword]=useState("");
    useEffect(
        ()=>{
            if (localStorage.getItem("username")!==null)
            {
                props.history.push('/home/announcement');
            }
        }
    );
    const Login = () =>{
        // props.history.push('/home/announcement');
        const data ={
            device_id:account,
            password:password
        };
        
        login(data).then(
            res =>{
                enqueueSnackbar('登录成功',{variant:'success'});
                // console.log(res);
                localStorage.setItem("username", res.data.username)
                props.history.push('/home/announcement');
            }
        ).catch(
            err =>{
                enqueueSnackbar(err.response.data.msg,{variant:'error'})
            }
        );
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    社区信息管理系统
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="account"
                        label="账号"
                        name="account"
                        autoComplete="account"
                        value={account}
                        onChange={(e)=>{setAccount(e.target.value)}}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="密码"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="记住帐号"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick = {Login}
                    >
                        登录
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
