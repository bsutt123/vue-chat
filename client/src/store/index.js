import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import rooms from './modules/rooms';
import messages from './modules/messages';


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    rooms,
    messages,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

