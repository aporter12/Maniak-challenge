import {getImagesFromManiak} from '../utils/APIRequests';
import {GET_IMAGES, LOADING, ERROR} from '../types/types';

export const getImages = authToken => async dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    const images = await getImagesFromManiak(authToken);
    console.log('hello from getImages() action');
    console.log(images);
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
