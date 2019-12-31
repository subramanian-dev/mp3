import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Homepage from '../components/Homepage/Homepage'


function App() {
    return (
      <Router>
    <div className="App">
    <Route path="/" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/homepage" exact component={Homepage}/>
    </div>
    </Router>
  );
}

export default App;
