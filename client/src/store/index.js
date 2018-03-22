import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import VModal from 'vue-js-modal';
import rooms from './modules/rooms';
import messages from './modules/messages';
import auth from './modules/auth';

Vue.use(Vuex);
Vue.use(VModal);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    rooms,
    messages,
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

