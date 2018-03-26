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
<style lang="postcss">
:root {
  --colorPrimary: #673ab7;
}
.home {
  display: grid;
  grid-template-columns: 15rem 1fr;
  min-height: 100vh;
}

.btn {
  font-size: .75rem;
  margin-bottom: 1rem;
  padding: .25rem .5rem;
  color: black;
  transition: all .1s linear;

  &:hover {
    background-color: gray(210);
    transform: translateY(-4px);
  }
}
</style>
