import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Product from './Components/Product';
import Pricing from './Components/Pricing';
import Solution from './Components/Solution';
import Customer from './Components/Customer';
import Resources from './Components/Resources';
import Forgot from './Components/Forgot';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () =>{
  return(
    <>
    <Navbar />
    <Switch>
    <Route exact path="/home" component={Landing}></Route>
    <Route exact path="/product" component={Product}></Route>
    <Route exact path="/pricing" component={Pricing}></Route>
    <Route exact path="/Solution" component={Solution}></Route>
    <Route exact path="/customer" component={Customer}></Route>
    <Route exact path="/resouce" component={Resources}></Route>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/passforgot" component={Forgot}></Route>
    <Redirect to="/home" />
    </Switch>
    <Footer className="setfoot" />
    </>
  );
};

export default App;
