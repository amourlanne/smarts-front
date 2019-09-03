<template>
  <helmet-provider>
    <div>
      <helmet defaultTitle="Vue.js" titleTemplate="Vue.js | %s">
        <html :lang="this.$i18n.locale"></html>
      </helmet>
      <router-view />
    </div>
  </helmet-provider>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { Helmet, HelmetProvider } from "@jnields/vue-helmet";

export default Vue.extend({
  name: "app",
  components: { Helmet, HelmetProvider }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600&display=swap");

body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
form {
  .form-error {
    display: none;
  }
  .form-group-error {
    + .form-error {
      display: block;
    }
  }
}
</style>
