<template v-if="user" >
  <div :class="$style.container">
    <button class="btn" :class="$style.openModalButton" @click="open"> Sign Up </button>
    <modal
      name="sign-up"
      :adaptive="true"
      :width="600"
      :height="300"
    >
      <div :class="$style.modalContainer">
        <h3 :class="$style.modalHeading" > Log in </h3>
        <hr>
        <form id="sign-up" >
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
          <label
            :class="$style.formLabel"
          >
            Password Confirmation:
          </label>
          <input
            :class="$style.formInput"
            v-model="password_confirmation"
            placeholder="Enter Password..."
            type="password"
          />
          <button
            @click="submit"
            class="btn"
          >
            Submit
          </button>
          <button
            @click="close"
            class="btn"
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
      password_confirmation: '',
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
      this.createUser({
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      });
      this.email = '';
      this.password = '';
      this.password_confirmation = '';
      this.$modal.hide('sign-up');
    },
    open() {
      this.$modal.show('sign-up');
    },
    close(event) {
      event.preventDefault();
      this.$modal.hide('sign-up');
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
  #sign-up {

    & > *:not(:last-child) {
      margin-bottom: .25rem;
    }
  }
</style>
