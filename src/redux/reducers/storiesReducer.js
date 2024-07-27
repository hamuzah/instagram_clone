// src/redux/reducers/storiesReducer.js
const initialState = {
    stories: []
  };
  
  const storiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_STORY':
        return {
          ...state,
          stories: [...state.stories, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default storiesReducer;
  