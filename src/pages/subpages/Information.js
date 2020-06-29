import React, { useState, useEffect } from 'react';
import {blocks} from "../../api/normal";
import {useSnackbar} from "notistack";

import SimpleTable from "../../components/Table";

export function Information(props) {
    const { enqueueSnackbar } = useSnackbar();

    const informationInit= ()=>
    {
        blocks().then(
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
        informationInit()
    });
    return(
        <div>
            <SimpleTable/>
        </div>
    )
}
