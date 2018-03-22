import axios from 'axios';

const initialState = {};

const getters = {
  user: state => state.user,
  uid: state => state.uid,
  accessToken: state => state.accessToken,
  client: state => state.client,

};

const actions = {
  createUser({ commit }, payload) {
    const options = {
      email: payload.email,
      password: payload.password,
      password_confirmaton: payload.password_confirmation,
      confirm_success_url: 'http://localhost:8080/',
    };
    axios.post('api/auth/', options)
      .then((res) => {
        commit('setUser', {
          uid: res.headers.uid,
          accessToken: res.headers['access-token'],
          client: res.headers.client,
        });
      });
  },
  setUser({ commit }, payload) {
    axios.post('/api/auth/sign_in', {
      email: payload.email,
      password: payload.password,
    }).then((res) => {
      commit('setUser', {
        uid: res.headers.uid,
        accessToken: res.headers['access-token'],
        client: res.headers.client,
      });
    });
  },
};

const mutations = {
  setUser(state, { uid, accessToken, client }) {
    state.uid = uid;
    state.accessToken = accessToken;
    state.client = client;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
