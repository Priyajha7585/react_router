import React from 'react';
import {Route, Routes, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import ProdOne from './ProdOne/ProdOne';
import ProdTwo from './ProdTwo/ProdTwo';
import ProdThree from './ProdThree/ProdThree';
import ProdFour from './ProdFour/ProdFour';
import Nav from './Nav/Nav';
import Home from './Home/Home';

function App() {
  return (
    <div>
    <Router>
      <Nav /><br /><br />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/product1" component={ProdOne}/>
      <Route path="/product2" component={ProdTwo}/>
      <Route path="/product3" component={ProdThree}/>
      <Route path="/product4" component={ProdFour} />
    </Switch>
  </Router>
    </div>
  )
}

export default App