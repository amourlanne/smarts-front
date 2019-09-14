<template>
  <div class="project" v-if="project">
    <Helmet>
      <title>{{ project.name }}</title>
    </Helmet>
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
            src="../../../assets/logo.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          {{ project.name }}
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <router-link
            :to="{ name: 'project-users', params: { slug: project.slug } }"
            class="dropdown-item"
            >Users</router-link
          >
          <a class="dropdown-item" href="#">Préferences</a>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link
              class="nav-link"
              :to="{
                name: 'project-dashboard',
                params: { slug: project.slug }
              }"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view :project="project"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { Helmet } from "@jnields/vue-helmet";
import projectService from "../../../services/project.service";

export default Vue.extend({
  name: "project",
  components: { Helmet },
  data() {
    return {
      project: null as Object | null
    };
  },
  watch: {
    async "$route.params.slug"(to, from) {
      if (to !== from) {
        await this.getProject(to);
      }
    }
  },
  methods: {
    async getProject(slug: string) {
      try {
        this.project = await projectService.getBySlug(slug);
      } catch (e) {
        // console.log(e);
      }
    }
  },
  async beforeMount() {
    const slug = this.$route.params.slug;
    await this.getProject(slug);
  }
});
</script>

<style lang="scss"></style>
