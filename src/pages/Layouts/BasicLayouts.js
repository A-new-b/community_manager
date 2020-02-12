import React,{Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Dashboard} from "../home";

export class BasicLayouts extends Component{
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path={`${this.props.match.path}`} component={Dashboard}/>
                        <Route path={`${this.props.match.path}/home`} component={Dashboard}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}
