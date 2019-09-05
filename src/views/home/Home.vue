<template>
  <div class="app">
    <Helmet>
      <title>Home</title>
    </Helmet>
    <home-header></home-header>
    <div id="nav">
      <a v-on:click="logout">Logout</a>
    </div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { Helmet } from "@jnields/vue-helmet";
import HomeHeader from "@/components/HomeHeader.vue";

export default Vue.extend({
  name: "home",
  components: { Helmet, HomeHeader },
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
.app {
  text-align: center;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
