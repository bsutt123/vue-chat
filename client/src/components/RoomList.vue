<template>
  <div :class='$style.container'>
    <div :class='$style.signInBox'>
      <sign-in></sign-in>
      <sign-up></sign-up>
    </div>
    <div :class='$style.headingBox'>
      <h2 :class='$style.heading'> Rooms </h2>
    </div>
    <ul :class='$style.roomList'>
      <li
        v-for='(room, index) in rooms'
        v-bind:key='index'
        :class='$style.roomItem'
        @click="setActiveRoom(room)"
      >
        {{ room.name }}
      </li>
    </ul>
    <room-modal></room-modal>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import SignIn from './SignIn';
import SignUp from './SignUp';
import RoomModal from './RoomModal';

const { mapState, mapActions } = createNamespacedHelpers('rooms');

export default {
  name: 'RoomList',
  computed: {
    ...mapState({
      rooms: state => state.rooms,
      activeRoom: state => state.activeRoom,
    }),
  },
  methods: {
    ...mapActions([
      'getRooms',
      'setActiveRoom',
    ]),
  },
  created() {
    this.getRooms();
  },
  components: {
    'sign-in': SignIn,
    'sign-up': SignUp,
    'room-modal': RoomModal,
  },
};
</script>

<style lang="postcss" module>
@import '../styles/colors.css';

.container {
  padding: 1rem;
  height: 100%;
  background-color: var(--colorPrimary);
  color: white;
}

.signInBox {
  text-align: center;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
}

.headingBox {
  display: grid;
  grid-template-columns: repeat(autofit, minmax(auto, 1fr));
  text-align: center;
}

.heading {
  margin-bottom: 0.5rem;
}

.newRoomButton {
  margin-bottom: 1rem;
  padding: .5rem 1rem;
  color: black;
  transition: all .1s linear;

  &:hover {
    background-color: gray(210);
    transform: translateY(-4px);
  }
}

.roomList {
  font-size: .9rem;
  list-style: none;
  margin-bottom: 1rem;
  max-width: 200px;

  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
}

.roomItem {
  cursor: pointer;
  transition: all .1s linear;

  &:hover {
    transform: translateY(-2px) scale(1.125);
  }
}


</style>
