<template>
  <div :class='$style.container'>
    <button
      class="btn"
      @click="open"
      :class="$style.newRoomButton"
    >
      Create a new Room
    </button>
    <modal
      name="new-room"
      :adaptive="true"
      :width="300"
      :height="200"
    >
      <div :class="$style.modalContainer">
        <h3 :class="$style.modalHeading"> Name your new room </h3>
        <input
          :class="$style.newRoomInput"
          type="text"
          v-model="newRoomName"
        />
        <button
          @click="close"
          :class="$style.modalButton"
          class="btn"
        >
          Close Modal
        </button>
        <button
          @click="addRoom(newRoomName)"
          :class="$style.modalButton"
          class="btn"
        >
          Add Room
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('rooms');
export default {
  name: 'RoomModal',
  data() {
    return {
      newRoomName: '',
    };
  },
  methods: {
    ...mapActions([
      'addRoom',
    ]),
    open() {
      this.$modal.show('new-room');
    },
    close() {
      this.$modal.hide('new-room');
    },
  },
};
</script>

<style lang="postcss" module>

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
