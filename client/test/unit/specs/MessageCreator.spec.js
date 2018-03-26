import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VModal from 'vue-js-modal';

import { CssModuleTestHelperMixin } from '../utils/test-helper';
import storeObject from '../utils/testStore';
import MessageCreator from '@/components/MessageCreator';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VModal);
localVue.use(CssModuleTestHelperMixin);


describe('MessageCreator', () => {
  let store;
  let actions;
  let wrapper;

  beforeEach( () => {
    store = new Vuex.Store(storeObject);
    actions = storeObject.modules.messages.actions;
    wrapper = shallow(MessageCreator, { localVue, store })
    wrapper.set
  });

  it('renders the snapshot correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('creates a message on submit', () => {
    const form = wrapper.find('.form');
    form.trigger('submit');
    expect(actions.createMessage.mock.calls.length).toEqual(1);
  })

  it('renders newMessage', () => {
    const input = wrapper.find('.newMessageInput');
    wrapper.setData({newMessage: 'Brady'});
    expect(wrapper.vm.$data.newMessage).toBe('Brady');
  })
})