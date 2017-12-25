import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {

  render() {
    const cartItems = this.props.cart.map((item, idx) => {
      return <li key={idx}>{item}</li>
    })
    return (
      <div>
        <Shelf addItem={this.props.action.addToCart} />
        <h2>Cart Items</h2>
          <ul>
            {cartItems}
          </ul>
        
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(CartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
