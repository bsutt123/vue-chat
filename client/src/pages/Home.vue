<template>
  <div class="home">
    <room-list></room-list>
  </div>
</template>

<script>
import RoomList from '@/components/RoomList';

export default {
  name: 'Home',
  components: {
    'room-list': RoomList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
}
</style>
