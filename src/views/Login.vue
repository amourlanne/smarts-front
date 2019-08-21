<template>
  <form @submit.prevent="submit">
    <div :class="{ 'form-group--error': $v.username.$error }">
      <label>username</label>
      <input v-model.trim="$v.username.$model" />
    </div>
    <div v-if="!$v.username.required">Field is required</div>
    <div v-if="!$v.username.minLength">
      username must have at least
      {{ $v.username.$params.minLength.min }} letters.
    </div>
    <div>
      <label>Password</label>
      <input v-model.trim.lazy="$v.password.$model" />
    </div>
    <div v-if="!$v.password.required">Field is required</div>
    <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">
      Submit!
    </button>
    <p v-if="submitStatus === 'OK'">Thanks for your submission!</p>
    <p v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    <p v-if="submitStatus === 'PENDING'">Sending...</p>
  </form>
</template>

<script>
import { minLength, required } from "vuelidate/lib/validators";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      submitStatus: null
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(4)
    },
    password: {
      required
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";

        let username = this.username;
        let password = this.password;

        this.$store
          .dispatch("login", { username, password })
          .then(() => {
            this.submitStatus = "OK";
            this.$router.push("/");
          })
          .catch(err => {
            this.submitStatus = "ERROR";
          });
      }
    }
  }
};
</script>

<style scoped></style>
