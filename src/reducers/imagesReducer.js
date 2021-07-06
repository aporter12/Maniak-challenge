import {GET_IMAGES, LOADING, ERROR} from '../types/types';
const INITIAL_STATE = {
  images: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
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
