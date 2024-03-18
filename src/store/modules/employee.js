import { fetchAllEmployeesApi, addNewEmployeeApi } from '../../api/employeeApi';

const state = () => ({
  allEmployees: {
    status: 'idle',
    data: []
  },
  newEmployee: {
    status: 'idle',
    error: null
  }
});

// getters
const getters = {
  allEmployees: (state) => state.allEmployees,
  newEmployee: (state) => state.newEmployee
};

// mutations
const mutations = {
  SET_ALL_EMPLOYEES(state, value) {
    state.allEmployees = value;
  },
  SET_NEW_EMPLOYEE(state, value) {
    state.newEmployee = value;
  }
};

// actions
const actions = {
  resetEmployeeState({ commit }) {
    // Reset the new employee state
    commit('SET_NEW_EMPLOYEE', {
      status: 'idle',
      error: null
    });
  },

  async fetchAllEmployees({ dispatch, commit }) {
    // RESET EMPLOYEES DATA
    commit('SET_ALL_EMPLOYEES', {
      status: 'loading',
      data: []
    });

    dispatch('resetEmployeeState');

    try {
      const res = await fetchAllEmployeesApi();
      if (res.status === 200) {
        commit('SET_ALL_EMPLOYEES', {
          status: 'success',
          data: res.data
        });
      }
    } catch (error) {
      commit('SET_ALL_EMPLOYEES', {
        status: 'error',
        data: []
      });
    }
  },

  async addNewEmployee({ commit }, body) {
    // RESET EMPLOYEES DATA
    commit('SET_NEW_EMPLOYEE', {
      status: 'loading',
      error: null
    });

    try {
      const res = await addNewEmployeeApi(body);
      if (res.status === 201) {
        commit('SET_NEW_EMPLOYEE', {
          status: 'success',
          error: null
        });
      }
    } catch (error) {
      let errorResponse = {
        status: error.response.status,
        message: 'Unexpected Error, please try again later!'
      };

      if (error.response) {
        errorResponse = { ...errorResponse, message: error.response.data.message };
      }

      commit('SET_NEW_EMPLOYEE', {
        status: 'error',
        error: errorResponse
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
