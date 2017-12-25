import React, { Component } from 'react';

import Cart from './Cart';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        This is just a test to see if Redux is running
        <Cart />
      </div>
    );
  }
}

export default ShoppingCart;