import Container from "@material-ui/core/Container";
import React from "react";

export function Announcement() {
    return (<div>
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
    </div>)
}