<template v-if="user">
  <div :class="$style.container">
    <button class="btn" :class="$style.openModalButton" @click="open"> Sign In </button>
    <modal
      name="sign-in"
      :adaptive="true"
      :width="600"
      :height="300"
    >
      <div :class="$style.modalContainer">
        <h3 :class="$style.modalHeading" > Log in </h3>
        <hr>
        <form id="sign-in" >
          <label
            :class="$style.formLabel"
          >
            Username:
          </label>
          <input
            :class="$style.formInput"
            v-model="email"
            placeholder="Enter Email..."
            type="text"
          />
          <label
            :class="$style.formLabel"
          >
            Password:
          </label>
          <input
            :class="$style.formInput"
            v-model="password"
            placeholder="Enter Password..."
            type="password"
          />
          <button
            type="submit"
            class="btn"
            :class="$style.modalButton"
            @click.prevent="submit"
          >
            Submit
          </button>
          <button
            class="btn"
            :class="$style.modalButton"
            @click.prevent="close"
          >
            Close Modal
          </button>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapState } = createNamespacedHelpers('auth');

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapState({
      user: state => state.user,
      uid: state => state.uid,
      accessToken: state => state.accessToken,
      client: state => state.client,
    }),
  },
  methods: {
    ...mapActions([
      'createUser',
      'setUser',
    ]),
    submit(event) {
      event.preventDefault();
      this.setUser({
        email: this.email,
        password: this.password,
      });
      this.email = '';
      this.password = '';
      this.$modal.hide('sign-in');
    },
    open() {
      this.$modal.show('sign-in');
    },
    close() {
      this.$modal.hide('sign-in');
    },
    userExists() {
      return this.user !== undefined;
    },
  },
};
</script>

<style lang="postcss" module>
.container {
  text-align: center;
  display: inline-block;
}
.modalContainer {
  color: black;
  padding: 1rem;
}

.modalHeading {
  text-align: center;
}

.formLabel {
  display: block;
}

.formInput {
  width: 90%
}
</style>

<style lang="postcss">
  #sign-in {
    & > *:not(:last-child) {
      margin-bottom: .25rem;
    }
  }
</style>
