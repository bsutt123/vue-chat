import axios from 'axios';

const initialState = {
  messages: [],
  activeRoom: '',
};

const getters = {
  messages: state => state.messages,
  activeRoom(state, modGetters, rootState, rootGetters) {
    return rootGetters['rooms/activeRoom'];
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
  createMessage({ commit, localGetters }, message) {
    const activeRoom = localGetters.activeRoom;
    axios.post(`/api/rooms/${activeRoom.id}/messages`, {
      content: message,
    })
      .then((res) => {
        const newMessage = {
          content: res.data.data.attributes.content,
          id: res.data.data.id,
        };
        commit('addMessage', newMessage);
      });
  },
};

const mutations = {
  setMessages(state, messages) {
    state.messages = messages;
  },
  addMessage(state, message) {
    state.messages = state.messages.concat(message);
  },
};


export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
