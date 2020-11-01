import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reduc ers from '../reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk)
  )
);

export default store;