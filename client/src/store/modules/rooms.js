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
      const names = res.data.data.map(room => ({
        name: room.attributes.name,
        id: room.id,
      }));
      commit('setRooms', names);
    });
  },
  addRoom({ commit }, newRoomName) {
    axios.post('/api/rooms', {
      name: newRoomName,
    }).then((res) => {
      const room = {
        name: res.data.data.attributes.name,
        id: res.data.data.id,
      };
      commit('addRoomToState', room);
    });
  },
  setActiveRoom({ commit }, roomName) {
    commit('setActiveRoom', roomName);
  },
};

const mutations = {
  setRooms(state, rooms) {
    state.rooms = rooms;
  },
  addRoomToState(state, room) {
    state.rooms = state.rooms.concat(room);
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
