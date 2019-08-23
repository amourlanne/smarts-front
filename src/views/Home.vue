<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a v-on:click="logout">Logout</a>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home",
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
});
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
