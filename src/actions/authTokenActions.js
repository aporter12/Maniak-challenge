import {getAuthToken as getToken} from '../utils/APIRequests';
import {GET_AUTH_TOKEN, LOADING, ERROR} from '../types/types';

export const getAuthToken = (username, password) => async dispatch => {
  dispatch({
    type: LOADING,
  });
  try {
    const authToken = await getToken(username, password);
    console.log(authToken);
    dispatch({
      type: GET_AUTH_TOKEN,
      payload: authToken,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
