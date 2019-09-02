import {axios as api} from 'axios';

export default {
  signUp: data => api.post(`/signup`, data),
}