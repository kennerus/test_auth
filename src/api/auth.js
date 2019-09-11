import api from './api';

export default {
  /**
   * Регистрация пользователя
   *
   * @param {Object} data
   * @param {String} data.email
   * @param {String} data.password
   * @param {String} data.password_confirmation
   * @param {String} [data.name]
   * @param {String} [data.surname]
   * @param {String} [data.phone]
   * @return {*}
   */
  signUp: data => api.post(`/signup`, data),
}