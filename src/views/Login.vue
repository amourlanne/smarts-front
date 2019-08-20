<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
      <label class="form__label">Email</label>
      <input class="form__input" v-model.trim="$v.email.$model" />
    </div>
    <div class="error" v-if="!$v.email.required">Field is required</div>
    <div class="error" v-if="!$v.email.minLength">
      Email must have at least {{ $v.email.$params.minLength.min }} letters.
    </div>
    <div class="form-group">
      <label class="form__label">Password</label>
      <input class="form__input" v-model.trim.lazy="$v.password.$model" />
    </div>
  </div>
</template>

<script>
import { minLength, required } from "vuelidate/lib/validators";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      minLength: minLength(4)
    },
    password: {}
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      console.log("Login");
      // this.$store
      //   .dispatch("login", { email, password })
      //   .then(() => this.$router.push("/"))
      //   .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped></style>
