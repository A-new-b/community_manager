import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {BasicLayouts} from "./pages/BasicLayouts";
import {Login} from "./pages/login";
import {SnackbarProvider} from 'notistack';

function App() {
    return (
        <div className="App">
            <SnackbarProvider maxSnack={3}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route path='/home' component={BasicLayouts}/>
                        <Route path='/login' component={Login}/>
                    </Switch>
                </Router>
            </SnackbarProvider>
        </div>
    );
}

export default App;
