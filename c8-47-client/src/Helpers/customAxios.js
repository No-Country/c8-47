import axios from 'axios';

const API_URL = 'http://localhost:4000';
//! VOLVER A VER cambiar url al hacer deploy

const customAxios = axios.create({ baseURL: API_URL });

customAxios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('cevitaeToken');

    if (token)
      req.headers.Authorization =
        req.headers.Authorization || `Bearer ${token}`;

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({
        status: 500,
        timestamp: new Date(),
        message: 'Se ha producido un error',
        error: 'Error inesperado',
      });
    }
    return Promise.reject(error.response.data);
  }
);

export default customAxios;
