// Import Redux and thunk middleware
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// Bring in root reducer
import rootReducer from "./reducers";

// Initialise initial state as empty object
const initialState = {};
const middleware = [thunk];

// Add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
