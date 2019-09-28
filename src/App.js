import React from 'react';
import './App.css';
import NavBar from './components/Layout/NavBar.js';
import Footer from './components/Layout/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Department from './components/Department.js';
import HomePage from './components/HomePage.js';
import AddProduct from './components/AddProduct.js';
import ItemDetails from './components/ItemDetails.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'typeface-roboto';

import { Provider } from 'react-redux';
import Store from './store.js';


function App(props) {
  return (
    <Provider store={Store}>
      <div className="App">
        <CssBaseline />
        <NavBar />

        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:instId" component={Department} />
            <Route exact path="/new/product" component={AddProduct} />
            <Route exact path="/:deptId/:itemId" component={ItemDetails} />
          </Switch>
        </Router>

        <Footer />

      </div>
    </Provider>
  );
}

export default App;
