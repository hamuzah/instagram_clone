// src/actions/index.js
import { FETCH_STORIES_SUCCESS, FETCH_FEEDS_SUCCESS } from './types';

export const fetchStories = () => async (dispatch) => {
  try {
    // Replace with your API endpoint
    const response = await fetch('/api/stories');
    const data = await response.json();
    dispatch({ type: FETCH_STORIES_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const fetchFeeds = () => async (dispatch) => {
  try {
    // Replace with your API endpoint
    const response = await fetch('/api/feeds');
    const data = await response.json();
    dispatch({ type: FETCH_FEEDS_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
  }
};
