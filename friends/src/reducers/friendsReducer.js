import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_DATA_START,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAILURE
} from "../actions";

const initialState = {
  error: "",
  isFetching: false,
  friends: [],
  friend: {}
};

export const friendsReducer = (state = initialState, action) => {
  console.log(action.type, state);
  switch (action.type) {
    case FETCH_DATA_START: {
      return {
        ...state,
        error: "",
        isFetching: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        error: "",
        isFetching: false,
        friends: action.payload
      };
    }
    // case ADD_DATA_START:
    //   return {
    //     ...state,
    //     friends: [...state.friends, action.payload]
    //   };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    default: {
      return state;
    }
  }
};
