import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VModal from 'vue-js-modal';

import { CssModuleTestHelperMixin } from '../utils/test-helper';
import storeObject from '../utils/testStore';
import MessageList from '../../../src/components/MessageList';


const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VModal);
localVue.use(CssModuleTestHelperMixin);

describe('MessageList', () => {
  let store;
  let wrapper;

  beforeEach( () => {
    store = new Vuex.Store(storeObject);
    wrapper = shallow(MessageList, { localVue, store })
  });

  it('renders the message list', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })
});