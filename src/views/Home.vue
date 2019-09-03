<template>
  <div class="home">
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div id="nav">
      <router-link to="./">Home</router-link> |
      <router-link to="about">About</router-link> |
      <router-link to="users">Users</router-link> |
      <a v-on:click="logout">Logout</a>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { Helmet } from "@jnields/vue-helmet";

export default Vue.extend({
  name: "home",
  components: { Helmet },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({
          name: "login",
          params: { locale: this.$i18n.locale }
        });
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
