<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LocaleChanger from "@/components/LocaleChanger.vue";

export default Vue.extend({
  name: "app",
  components: {}
});
</script>

<style lang="scss">
// Google Fonts
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600&display=swap");

#app {
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
