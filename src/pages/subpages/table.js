import React, { useState, useEffect } from 'react';
import {useSnackbar} from "notistack";

import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'

import MaterialTable from 'material-table';
import {getInfo,createAsset} from "../../api/normal";
import {ArrowDownward, Clear, DeleteOutline, Edit} from "@material-ui/icons";

export function TableList() {
    const { enqueueSnackbar } = useSnackbar();

    const [state, setState] = React.useState({
        columns: [
            { title: '时间', field: 'time' },
            { title: '血糖', field: 'blood_sugar' },
            { title: '舒张压', field: 'blood_pressure_s',},
            {
                title: '收缩压',
                field: 'blood_pressure_d',
                // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
        ],
        data: [],
    });

    const [loading,setLoading]=React.useState(false);

    const tableInit= ()=>{
        const token = localStorage.getItem('token');
        setLoading(true);
        getInfo(token).then(
            res =>{
                console.log(res);
                if(res.data.code===1)
                {
                    let info=[];
                    for (let i=0;i<res.data.list.length;i++)
                    {
                        let item = JSON.parse(res.data.list[i]);
                        info.push(item)
                    }
                    setState((prevState) => {
                        let data=info;
                        return { ...prevState, data };
                    });
                }
                else {
                    enqueueSnackbar(res.data.msg,{variant:'error'})
                }
            }
        ).catch().finally(
            ()=>{
                setLoading(false);
            }
        )
    };

    useEffect(() =>
    {
        tableInit()
    },[]);
    return (
        <MaterialTable
            title="健康数据"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        console.log(newData);
                        // setTimeout(() => {
                        //     resolve();
                        //     setState((prevState) => {
                        //         const data = [...prevState.data];
                        //         data.push(newData);
                        //         return { ...prevState, data };
                        //     });
                        // }, 600);
                        createAsset(localStorage.getItem('token'),newData).then(
                            res =>{
                                if(res.data.code ===1)
                                {
                                    enqueueSnackbar('新增成功',{variant:'success'})
                                }else {
                                    enqueueSnackbar(res.data.msg,{variant:'error'})
                                }
                                tableInit();
                            }
                        ).catch().finally(
                            ()=>{
                                resolve();
                            }
                        )
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        // setTimeout(() => {
                        //     resolve();
                        //     if (oldData) {
                        //         setState((prevState) => {
                        //             const data = [...prevState.data];
                        //             data[data.indexOf(oldData)] = newData;
                        //             return { ...prevState, data };
                        //         });
                        //     }
                        // }, 600);
                        enqueueSnackbar('该功能目前暂不开放',{variant:'error'})
                        resolve();
                    }),
            }}
            isLoading={loading}
            icons={
                {
                    Check: Check,
                    DetailPanel: ChevronRight,
                    Delete: DeleteOutline,
                    Export: SaveAlt,
                    Filter: FilterList,
                    FirstPage: FirstPage,
                    LastPage: LastPage,
                    NextPage: ChevronRight,
                    PreviousPage: ChevronLeft,
                    Search: Search,
                    ThirdStateCheck: Remove,
                    Add: Add,
                    SortArrow: ArrowDownward,
                    Clear: Clear,
                    Edit: Edit,
                    ViewColumn: ViewColumn,
                    ResetSearch:Clear
                }
            }
            options={{
                exportButton: true
            }}
        />
    );
}
