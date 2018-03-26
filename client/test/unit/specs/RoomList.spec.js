import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VModal from 'vue-js-modal';

import { CssModuleTestHelperMixin } from '../utils/test-helper';
import RoomList from '../../../src/components/RoomList';
import storeObject from '../utils/testStore';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VModal);
localVue.use(CssModuleTestHelperMixin);

describe('RoomList', () => {
  let store;
  let wrapper;
  let actions;

  beforeEach(() => {
    store = new Vuex.Store(storeObject);
    wrapper = shallow(RoomList, {store, localVue})
    actions = storeObject.modules.rooms.actions
  });

  it('calls the store action when expected', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders the correct number of rooms', () => {
    expect(wrapper.find('.roomList').findAll('.roomItem').length).toEqual(3)
  });

  it('calls setActiveRoom on click', () => {
    const roomItems = wrapper.findAll('.roomItem')
    roomItems.trigger('click')
    expect(actions.setActiveRoom.mock.calls.length).toEqual(3)
  })

});
