import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VModal from 'vue-js-modal';

import { CssModuleTestHelperMixin, show, hide } from '../utils/test-helper';
import storeObject from '../utils/testStore';
import RoomModal from '@/components/RoomModal';


const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VModal);
localVue.use(CssModuleTestHelperMixin);

describe('MessageList', () => {
  let store;
  let wrapper;

  beforeEach( () => {
    store = new Vuex.Store(storeObject);
    wrapper = shallow(RoomModal, { localVue, store })
  });

  it('renders the room modal', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('opens executes after the click event', () => {
    const open = jest.fn()
    wrapper.setMethods({ open })
    wrapper.find('.newRoomButton').trigger('click');
    expect(open.mock.calls.length).toEqual(1);
  });

  it('closes the modal', () => {
    wrapper.find('.newRoomButton').trigger('click')
  })
});