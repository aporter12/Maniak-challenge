import {combineReducers} from 'redux';
import authTokenReducer from './authTokenReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
  authTokenReducer,
  imagesReducer,
});
