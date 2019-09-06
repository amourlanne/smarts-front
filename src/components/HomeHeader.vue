<template>
  <header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        Smarts
      </a>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="./" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="about" class="nav-link">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="users" class="nav-link">
              Users
            </router-link>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ul class="navbar-nav ml-3">
          <li class="nav-item">
            <locale-changer></locale-changer>
          </li>
          <li class="nav-item">
            <a v-on:click="logout" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import LocaleChanger from "./LocaleChanger";

export default Vue.extend({
  name: "home-header",
  components: { LocaleChanger },
  data() {
    return {};
  },
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

<style lang="scss"></style>
