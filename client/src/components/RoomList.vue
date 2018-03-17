<template>
  <div :class='$style.container'>
    <div :class='$style.headingBox'>
      <h3 :class='$style.heading'> Rooms </h3>
      <button @click="openModal" :class="$style.newRoomButton"> Create a new Room </button>
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
    <new-room-modal
      name="new-room"
      :adaptive="true"
      :width="300"
      :height="200"
    >
      <div :class="$style.modalContainer">
        <h3 :class="$style.modalHeading"> Name your new room </h3>
        <input :class="$style.newRoomInput" type="text" v-model="newRoomName" />
        <button @click="closeModal" :class="$style.modalButton" > Close Modal </button>
        <button @click="addRoom(newRoomName)" :class="$style.modalButton" > Add Room </button>
      </div>
    </new-room-modal>
  </div>
</template>

<script>
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
import VModal from 'vue-js-modal';

const { mapState, mapActions } = createNamespacedHelpers('rooms');

Vue.use(VModal, { componentName: 'new-room-modal' });

export default {
  name: 'RoomList',
  data() {
    return {
      newRoomName: '',
    };
  },
  computed: {
    ...mapState({
      rooms: state => state.rooms,
      activeRoom: state => state.activeRoom,
    }),
  },
  methods: {
    ...mapActions([
      'getRooms',
      'addRoom',
      'setActiveRoom',
    ]),
    openModal() {
      this.$modal.show('new-room');
    },
    closeModal() {
      this.$modal.hide('new-room');
    },
  },
  created() {
    this.getRooms();
  },
};
</script>

<style lang="postcss" module>
@import '../styles/colors.css';

.container {
  padding: 2rem;
  height: 100%;
  background-color: var(--colorPrimary);
  color: white;
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

.modalContainer {
  text-align: center;
  padding: 1rem;
  color: black;
}

.modalHeading {
  margin-bottom: 1rem;
}

.newRoomInput {
  width: 90%;
  display: block;
  color: black;
  margin: * auto .5rem auto;
}

.modalButton {
  display: inline-block;
  padding: .25rem .5rem;
  font-size: .8rem;
  border-radius: 2px;
  box-shadow: none;
}

</style>
