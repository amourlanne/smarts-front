<template>
  <header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="dropdown show">
        <a
          class="navbar-brand"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src="../assets/logo.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Smarts
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <h6 class="dropdown-header">Dotsafe</h6>
          <router-link class="dropdown-item" :to="{ name: 'users' }"
            >People and teams</router-link
          >
          <router-link class="dropdown-item" :to="{ name: 'companies' }"
            >Companies</router-link
          >
          <a class="dropdown-item" v-on:click="logout">Logout</a>
          <div class="dropdown-divider" v-if="currentUser"></div>
          <a class="dropdown-item" href="#" v-if="currentUser">
            <div>{{ currentUser.firstName }} {{ currentUser.lastName }}</div>
            <div>{{ currentUser.email }}</div>
          </a>
        </div>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="nav-item dropdown" id="dropdownProjects">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Projects
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" :to="{ name: 'projects' }"
                >Your projects</router-link
              >
              <div class="dropdown-divider"></div>
              <h6 class="dropdown-header">All projects</h6>
              <router-link
                :key="project.id"
                v-for="project in companies"
                class="dropdown-item"
                :to="{
                  name: 'project-dashboard',
                  params: { slug: project.slug }
                }"
              >
                {{ project.name }}</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">
              About
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
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import LocaleChanger from "./LocaleChanger.vue";
import projectService from "../services/project.service";
import $ from "jquery";
import { mapState } from "vuex";

export default Vue.extend({
  name: "app-header",
  components: { LocaleChanger },
  computed: mapState(["currentUser"]),
  data() {
    return {
      companies: []
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({
          name: "login"
        });
      });
    },
    async getAll() {
      try {
        this.companies = await projectService.getAll();
      } catch (e) {
        // console.log(e);
      }
    }
  },
  async mounted() {
    $("#dropdownProjects").on("show.bs.dropdown", () => this.getAll());
  }
});
</script>

<style lang="scss"></style>
