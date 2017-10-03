import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Homepage from '../component/Homepage'
import Portfoliopage from '../component/Portfoliopage'
import Contactpage from '../component/Contactpage'
import Header from '../component/partials/Header.js';

const Portfolio = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={Homepage}/>
        <Route path="/portfolio" component={Portfoliopage}/>
        <Route path="/contact" component={Contactpage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default Portfolio;
