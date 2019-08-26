<template>
  <div id="app">
    <locale-changer />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LocaleChanger from "@/components/LocaleChanger.vue";

export default Vue.extend({
  name: "app",
  components: {
    LocaleChanger
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
