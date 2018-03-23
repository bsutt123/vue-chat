<template>
  <div :class="$style.container" >
    <h3 :class="$style.heading" > {{ activeRoom.name }} </h3>
    <ul :class="$style.messageList" >
      <li
        v-for='(message, index) in messages'
        :key="index"
        :class="$style.messageItem"
      >
        {{ message.content }}
      </li>
    </ul>
    <message-creator></message-creator>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import MessageCreator from './MessageCreator';

const { mapState } = createNamespacedHelpers('messages');

export default {
  computed: {
    ...mapState({
      messages: state => state.messages,
    }),
    activeRoom() {
      return this.$store.getters['rooms/activeRoom'];
    },
  },
  components: {
    'message-creator': MessageCreator,
  },
};
</script>

<style lang="postcss" module>


.container {
  position: relative;
}

.heading {
  margin: 1rem 0;
  text-align: center;
  font-size: 2rem;
}

.messageList {
  list-style: none;
  font-size: .8rem;
  margin-bottom: 6rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  & > *:nth-child(odd) {
    background-color: gray(225);
  }
}

.messageItem {
  padding: .25rem 1rem;
}

</style>
