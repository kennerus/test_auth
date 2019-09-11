import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
};

export default {
  state,
  getters,
  actions,
  mutations
};
