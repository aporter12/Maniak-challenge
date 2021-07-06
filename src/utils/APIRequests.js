import axios from 'axios';

const BASE_URL = 'https://challenge.maniak.co/api/';

export const getAuthToken = (username, password) => {
  const authToken = axios
    .post(`${BASE_URL}login`, {
      username,
      password,
    })
    .then(response => {
      return response.data.token;
    });

  return authToken;
};

export const getImagesFromManiak = authToken => {
  const images = axios
    .get(`${BASE_URL}images`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then(response => {
      return response.data;
    });

  return images;
};
