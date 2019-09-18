import React from 'react';
import './App.css';
import NavBar from './components/Layout/NavBar.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Department from './components/Department'
import HomePage from './components/HomePage.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'typeface-roboto';


function App(props) {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />


      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/:instName" component={Department}/>
        </Switch>  
      </Router>
      </div>
  );
}

export default App;
