import React, { useState, useEffect } from 'react';
import {blocks} from "../../api/normal";
import {useSnackbar} from "notistack";

import SimpleTable from "../../components/Table";
import {timestamp_s} from "../../utils/tools";

function createData( time, fat, pressure_s,pressure_d, others) {
    return {time, fat, pressure_s,pressure_d, others };
}

export function Information(props) {
    const { enqueueSnackbar } = useSnackbar();

    let [rows,setRows]= useState([]);

    const informationInit= ()=>
    {
        let temp=[];
        blocks().then(
            res =>{
                for (let i =0;i<res.data.length;i++)
                {
                    let data=JSON.parse(res.data[i].data_content);
                    let time = timestamp_s(res.data[i].create_time);
                    temp.push(createData(time,data.fat,data.pressure_s,data.pressure_d,data.others))
                }
                setRows(temp)
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
        informationInit()
    },[]);
    return(
        <div>
            <SimpleTable rows={rows}/>
        </div>
    )
}
