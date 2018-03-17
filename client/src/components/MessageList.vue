<template>
  <div :class="$style.container" >
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
import {createNamespacedHelpers} from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('messages');
export default {
  computed: {
    ...mapState({
      messages: state => state.messages,
    }),
  },
}
</script>

<style lang="postcss" module>


.container {
}

.messageList {
  list-style: none;

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
