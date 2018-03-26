<template>
  <div :class="$style.container">
    <form v-on:submit.prevent="submit" :class="$style.form">
      <textarea
        type='text'
        v-model="newMessage"
        :class="$style.newMessageInput"
      >
      </textarea>
      <button
        type="submit"
        :class='$style.submitButton'
        class='btn'
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('messages');
export default {
  data() {
    return {
      newMessage: '',
    };
  },
  methods: {
    ...mapActions([
      'createMessage',
    ]),
    submit() {
      this.createMessage(this.newMessage);
      this.newMessage='';
    },
  },
};
</script>

<style lang="postcss" module>
.container {
  position: fixed;
  background: white;
  left: 15rem;
  bottom: 0;
  right: 0;
}

.form {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 4rem;
  grid-gap: .5rem;
}

.submitButton {
  align-self: center;
  margin: 0;
  font-size: 1.25rem;
}

.newMessageInput {
  font-size: 1rem;
}
</style>
