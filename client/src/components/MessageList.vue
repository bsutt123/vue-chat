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
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

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
};
</script>

<style lang="postcss" module>


.container {
}

.heading {
  margin: 1rem 0;
  text-align: center;
  font-size: 2rem;
}

.messageList {
  list-style: none;
  font-size: .8rem;

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
