<template>
  <div class="password-reset">
    <locale-changer />
    <form @submit.prevent="submit">
      <div :class="{ 'form-group-error': $v.email.$error }">
        <label>email</label>
        <input v-model.trim="$v.email.$model" />
      </div>
      <div class="form-error" v-if="!$v.email.required">
        {{ $t("form.validation.required") }}
      </div>
      <div class="form-error" v-if="!$v.email.email">
        invalid email
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
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import LocaleChanger from "../components/LocaleChanger";

export default {
  name: "password-reset",
  components: {
    LocaleChanger
  },
  data() {
    return {
      email: "",
      submitStatus: null,
      errorMessage: null
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitStatus = "PENDING";

        let email = this.email;
        console.log(email);
      }
    }
  }
};
</script>

<style scoped></style>
