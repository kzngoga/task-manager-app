import { adminLogin } from '../../api/authApi';

const state = () => ({
  isLoading: false,
  requestResponse: {
    status: null,
    message: '',
    isError: false
  }
});

// getters
const getters = {
  requestResponse: (state) => state.requestResponse,
  isLoading: (state) => state.isLoading
};

// actions
const actions = {
  async login({ commit, state }, body) {
    // RESET REQUEST RESPONSE
    state.isLoading = true;
    commit('SET_REQUEST_RESPONSE', {
      status: null,
      message: '',
      isError: false
    });
    try {
      const res = await adminLogin(body);
      commit('SET_REQUEST_RESPONSE', {
        status: res.status,
        message: res.message,
        isError: false
      });

      if (res.status === 201) {
        window.location.href = '/';
        localStorage.setItem('TASK_APP_ADMIN_TOKEN', res.data.token);
      }
    } catch (error) {
      const errResponse = error.response;

      if (errResponse) {
        commit('SET_REQUEST_RESPONSE', {
          status: errResponse.status,
          message: errResponse.data.message,
          isError: true
        });
      } else {
        commit('SET_REQUEST_RESPONSE', {
          status: 500,
          message: error.message,
          isError: true
        });
      }
    } finally {
      state.isLoading = false;
    }
  },
  logout() {
    localStorage.removeItem('TASK_APP_ADMIN_TOKEN');
    window.location.href = '/login';
  }
};

// mutations
const mutations = {
  SET_REQUEST_RESPONSE(state, value) {
    state.requestResponse = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
