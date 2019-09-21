import React from 'react';
import './App.css';
import NavBar from './components/Layout/NavBar.js';
import Footer from './components/Layout/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Department from './components/Department'
import HomePage from './components/HomePage.js'
import AddProduct from './components/AddProduct.js'
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
          <Route exact path="/:instId" component={Department}/>
          <Route exact path="/new/product" component={AddProduct}/>
        </Switch>  
      </Router>

      <Footer />

      </div>
  );
}

export default App;
