import { FETCH_FAILURE, FETCH_SUCCESS, FETCHING } from '../actions';

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: ''
      };
    case FETCH_FAILURE:
      return {
        error: action.payload
      }
    default:
      return state;
  }
};
