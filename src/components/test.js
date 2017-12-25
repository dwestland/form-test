
import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.state = {
      shelfItems: [
        'Toothpaste',
        'Coffee Maker',
        'Rolex Watch'
      ]
    }
  }

  onClickAdd(item) {
    this.props.addItem(item);
  }

  render() {
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return<li key={idx}><button onClick={() => this.onClickAdd(item)}>[+]</button>{item}</li>
    })
    return (
      <div>
        <h2>Shelf</h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    );
  }
}

export default Shelf;

// Component (Container)
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

// Action
export const addToCart = (item) => {
  return {
    type: 'ADD',
    item
  };
}
// Reducer
export default(state = ["labrador", "hound", "poodle"], payload) => {
  switch(payload.type) {
    case 'ADD':
      return [...state, payload.item];
    default:
    return state;
  }
}