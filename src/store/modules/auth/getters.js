export default {
  isAuthenticated: state => Boolean(state.token),
  authStatus: state => state.status,
};
