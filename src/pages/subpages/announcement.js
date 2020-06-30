import Container from "@material-ui/core/Container";
import React, { useState, useEffect } from 'react';
import {notice} from "../../api/normal";
import {useSnackbar} from "notistack";
import {timestamp_s} from "../../utils/tools";

export function Announcement(props) {
    const { enqueueSnackbar } = useSnackbar();
    const [list,setList]=useState([]);
    const [loading,setLoading]=useState(true);
    const announcementInit= ()=>
    {
        setLoading(true);
        notice().then(
            res =>{
                console.log(res);
                let items=[];
                for( let i =0;i<res.data.length;i++)
                {
                    let time = timestamp_s(res.data[i].create_time);
                    items.push(
                        <div className={'announcement'} key={i}>
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
        announcementInit()
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
        <div>
            {list}
        </div>
    )

}