import {
  GET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  LOADING,
  ERROR,
} from '../types/types';
const INITIAL_STATE = {
  authToken: '',
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
        error: '',
        loading: false,
      };
    case REMOVE_AUTH_TOKEN:
      return {
        ...state,
        authToken: '',
        error: '',
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
