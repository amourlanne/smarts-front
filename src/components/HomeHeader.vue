<template>
  <header class="app-header">
    <router-link to="./">
      Home
    </router-link>
    <router-link to="about">
      About
    </router-link>
    <router-link to="users">
      Users
    </router-link>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home-header",
  data() {
    return {};
  },
  methods: {}
});
</script>

<style lang="scss"></style>
