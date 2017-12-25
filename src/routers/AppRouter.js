import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ShoppingCart from '../components/ShoppingCart';
import ReduxFormTest from '../components/ReduxFormTest';
import SimpleForm from '../components/SimpleForm';
import FetchMe from '../components/FetchMe';

const AppRouter = () => (
    <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/redux-form-test" component={ReduxFormTest} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/simple-form" component={SimpleForm} />
        <Route path="/fetch-me" component={FetchMe} />
        <Route component={NotFoundPage} />
      </Switch>    
    </div>
  </BrowserRouter>
)

export default AppRouter;
