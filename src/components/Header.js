import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Redux Form Test</h1>
    <ul>
      <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
      <li><NavLink to="/shopping-cart" activeClassName="is-active">ShoppingCart</NavLink></li>
      <li><NavLink to="/redux-form-test" activeClassName="is-active">ReduxFormTest</NavLink></li>
      <li><NavLink to="/fetch-me" activeClassName="is-active">FetchMe</NavLink></li>
      </ul>
  </header>
);

export default Header;


