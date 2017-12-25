import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Cart from './Cart';

const rootReducer = combineReducers({
  form: formReducer,
  cart: Cart
});

export default rootReducer;