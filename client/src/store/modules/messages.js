import axios from 'axios';

const initialState = {
  messages: [],
  activeRoom: '',
};

const getters = {
  messages: state => state.messages,
  activeRoom(state, modGetters, rootState, rootGetters) {
    return rootGetters.rooms.activeRoom;
  },
};

const actions = {
  getMessages({ commit }, activeRoom) {
    axios.get(`/api/rooms/${activeRoom.id}/messages`)
      .then((res) => {
        const messages = res.data.data.map(message => ({
          content: message.attributes.content,
          id: message.id,
        }));
        commit('setMessages', messages);
      });
  },
};

const mutations = {
  setMessages(state, messages) {
    state.messages = messages;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
