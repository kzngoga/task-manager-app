import { fetchAllEmployeesApi } from '../../api/employeeApi';

const state = () => ({
  allEmployees: {
    status: 'idle',
    data: []
  }
});

// getters
const getters = {
  allEmployees: (state) => state.allEmployees
};

// mutations
const mutations = {
  SET_ALL_EMPLOYEES(state, value) {
    state.allEmployees = value;
  }
};

// actions
const actions = {
  async fetchAllEmployees({ commit }) {
    // RESET EMPLOYEES DATA
    commit('SET_ALL_EMPLOYEES', {
      status: 'loading',
      data: []
    });

    try {
      const res = await fetchAllEmployeesApi();
      console.log('RES', res);
      if (res.status === 200) {
        commit('SET_ALL_EMPLOYEES', {
          status: 'success',
          data: []
        });
      }
    } catch (error) {
      commit('SET_ALL_EMPLOYEES', {
        status: 'error',
        data: []
      });
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
