// import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from 'react';
import {notice} from "../../api/normal";
import {useSnackbar} from "notistack";
import {timestamp_s} from "../../utils/tools";

export function Announcement(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [list,setList]=useState([]);
    const [loading,setLoading]=useState(false);
    const css = {
        'border': 'black 1px solid',
        'border-radius': '1rem',
        'padding': '1rem',
        'margin': '1rem auto',
        'max-width': '750px'
    }
    const announcementInit= ()=>
    {
        setLoading(true);
        notice().then(
            res =>{
                let items=[];
                for( let i =0;i<res.data.length;i++)
                {
                    let time = timestamp_s(res.data[i].create_time);
                    items.push(
                        <div style={css} key={i}>
                            <strong>{time}</strong>
                            <div style={{"margin": "0.5rem 1rem"}}>{res.data[i].title}</div>
                            <div style={{"margin": "0.5rem 1rem"}}>{res.data[i].content}</div>
                        </div>
                    )
                }
                setList(items);
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
    ).finally(
        () => setLoading(false)
        )
    };
    useEffect(() =>
    {
        // announcementInit()
    },[]);

    if (loading===true)
    {
        return (

            <div>
                正在加载
            </div>
        )
    }
    else return (
        <div style={css}>
            <strong>系统通知</strong>
            <div style={{"margin": "0.5rem 1rem"}}>社区信息管理系统上线了！</div>
            <div style={{"margin": "0.5rem 1rem"}}>在这里你可以记录下生活的信息哦</div>
        </div>
    )

}