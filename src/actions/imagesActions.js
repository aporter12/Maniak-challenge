import {getImagesFromManiak} from '../utils/APIRequests';
import {GET_IMAGES, REMOVE_AUTH_TOKEN, LOADING, ERROR} from '../types/types';

export const getImages = authToken => async dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    const images = await getImagesFromManiak(authToken);
    dispatch({
      type: GET_IMAGES,
      payload: images,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const removeAuthToken = () => dispatch => {
  dispatch({
    type: REMOVE_AUTH_TOKEN,
  });
};
