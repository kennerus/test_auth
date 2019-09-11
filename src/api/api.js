import axios from 'axios';

const api = {
  get: (url, params) => axios.get(url, params),
  post: (url, params) => axios.post(url, params),
  delete: (url) => axios.delete(url),
  put: (url, params) => axios.put(url, params),
};

const token = localStorage.getItem('user-token');

const axiosSettings = axios.create({
  baseURL: process.env.VUE_APP_API_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

if (token) axios.defaults.headers.common['Authorization'] = token;

export default {
  api, axiosSettings
}