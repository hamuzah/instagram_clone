// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { storiesReducer, feedsReducer } from './reducers';

const rootReducer = combineReducers({
  stories: storiesReducer,
  feeds: feedsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
