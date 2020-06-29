import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from 'react';
import {notice} from "../../api/normal";
import {useSnackbar} from "notistack";

export function Announcement(props) {
    const { enqueueSnackbar } = useSnackbar();

    const announcementInit= ()=>
    {
        notice().then(
            res =>{
                console.log(res)
            }
        ).catch(
        err =>{
            if(err.response.data.msg!==undefined)
            {
                enqueueSnackbar(err.response.data.msg,{variant:'error'})
            }
            else {
                enqueueSnackbar(err.response.status+"错误",{variant:'error'})
            }

        }
    )
    };
    useEffect(() =>
    {
        announcementInit()
    });
    return (
    <div>
        <div className={'announcement'}>
            <strong>2020-06-12 22:13:17</strong>
            <div style={{"margin": "0.5rem 1rem"}}>社区公告</div>
            <div style={{"margin": "0.5rem 1rem"}}>系统已经建成，欢迎使用</div>
        </div>
        <div className={'announcement'}>
            <strong>2020-06-12 22:13:17</strong>
            <div style={{"margin": "0.5rem 1rem"}}>社区公告</div>
            <div style={{"margin": "0.5rem 1rem"}}>系统已经建成，欢迎使用</div>
        </div>
    </div>
    )
}