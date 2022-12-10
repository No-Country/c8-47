import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const customAxios = axios.create({ baseURL: REACT_APP_API_URL });

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
      return Promise.reject(new Error('Se ha producido un error'));
    }
    return Promise.reject(error.response.data);
  }
);

export default customAxios;
