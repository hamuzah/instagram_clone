// src/reducers/index.js
import { FETCH_STORIES_SUCCESS, FETCH_FEEDS_SUCCESS } from '../actions/types.js';

const initialStoriesState = {
  stories: [],
};

const initialFeedsState = {
  feeds: [],
};

export const storiesReducer = (state = initialStoriesState, action) => {
  switch (action.type) {
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        stories: action.payload,
      };
    default:
      return state;
  }
};

export const feedsReducer = (state = initialFeedsState, action) => {
  switch (action.type) {
    case FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        feeds: action.payload,
      };
    default:
      return state;
  }
};
