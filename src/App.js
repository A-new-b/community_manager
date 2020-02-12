import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {BasicLayouts} from "./pages/Layouts/BasicLayouts";
import {login} from "./pages/login";

function App() {
  return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={login}/>
              <Route path='/home' component={BasicLayouts}/>
              <Route path='/login' component={login}/>
            </Switch>
          </Router>
      </div>
  );
}

export default App;
