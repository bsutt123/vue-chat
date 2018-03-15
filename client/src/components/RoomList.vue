<template>
  <div :class='$style.container'>
    <div :class='$style.heading'>
      <h1> Rooms </h1>
    </div>
    <ul :class='$style.roomList'>
      <li v-for='(room, index) in rooms' v-bind:key='index'> {{ room }} </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RoomList',
  computed: {
    rooms() {
      return this.$store.getters.rooms;
    },
  },
  methods: {
    ...mapActions([
      'getRooms',
    ]),
  },
  created() {
    this.getRooms();
  },
};
</script>

<style lang="postcss" module>
  .container {
    padding: 1rem;
    height: 100%;
    background-color: gray(210);
  }

  .roomList {
    font-size: 1.25rem;
    list-style: none;
  }
</style>
