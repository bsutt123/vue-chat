<template>
  <div class="home">
    <room-list></room-list>
    <message-list></message-list>
  </div>
</template>

<script>
import RoomList from '@/components/RoomList';
import MessageList from '@/components/MessageList';

export default {
  name: 'Home',
  components: {
    'room-list': RoomList,
    'message-list': MessageList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --colorPrimary: #673ab7;
}
.home {
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
}
</style>
