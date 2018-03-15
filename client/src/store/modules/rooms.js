import axios from 'axios';

const initialState = {
  rooms: [],
  activeRoom: undefined,
};

const getters = {
  rooms: state => state.rooms,
  activeRoom: state => state.activeRoom,
};

const actions = {
  getRooms({ commit }) {
    axios.get('/api/rooms').then((res) => {
      const names = res.data.data.map(roomEle => roomEle.attributes.name);
      commit('setRooms', names);
    });
  },
};

const mutations = {
  setRooms(state, rooms) {
    state.rooms = rooms;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
