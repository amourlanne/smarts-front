<template>
  <div>
    <form @submit.prevent="submit">
      <div :class="{ 'form-group-error': $v.username.$error }">
        <label>username</label>
        <input v-model.trim="$v.username.$model" />
      </div>
      <div class="form-error" v-if="!$v.username.required">
        {{ $t("form.validation.required") }}
      </div>
      <div class="form-error" v-if="!$v.username.minLength">
        username must have at least
        {{ $v.username.$params.minLength.min }} letters.
      </div>
      <div :class="{ 'form-group-error': $v.password.$error }">
        <label>Password</label>
        <input v-model.trim="$v.password.$model" />
      </div>
      <div class="form-error" v-if="!$v.password.required">
        {{ $t("form.validation.required") }}
      </div>
      <button
        class="button"
        type="submit"
        :disabled="submitStatus === 'PENDING'"
      >
        Submit!
      </button>
      <p v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <!--    <p v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>-->
      <p v-if="submitStatus === 'ERROR'">{{ errorMessage }}</p>
      <p v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
    <router-link to="password-reset">{{
      $t("auth.forgotPassword")
    }}</router-link>
  </div>
</template>

<script>
import { minLength, required } from "vuelidate/lib/validators";
import LocaleChanger from "../components/LocaleChanger";

export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      submitStatus: null,
      errorMessage: null
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
      if (!this.$v.$invalid) {
        this.submitStatus = "PENDING";

        let username = this.username;
        let password = this.password;

        const redirectUrl = this.$route.query.redirectUrl || {
          name: "home",
          params: this.$route.params
        };

        this.$store
          .dispatch("login", { username, password })
          .then(() => {
            this.submitStatus = "OK";
            this.$router.push(redirectUrl);
          })
          .catch(error => {
            this.submitStatus = "ERROR";
            this.errorMessage = error.message;
          });
      }
    }
  }
};
</script>

<style scoped></style>
