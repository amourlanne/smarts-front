<template>
  <div class="project">
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="list-group">
            <router-link
              v-for="project in projects"
              :to="{
                name: 'project-dashboard',
                params: { slug: project.slug }
              }"
              :key="project.id"
              class="list-group-item list-group-item-action"
              >{{ project.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { Helmet } from "@jnields/vue-helmet";
import projectService from "../../../services/project.service";

export default Vue.extend({
  name: "all-projects",
  components: { Helmet },
  data() {
    return {
      projects: []
    };
  },
  async beforeMount() {
    try {
      // @ts-ignore
      this.projects = await projectService.getAll();
    } catch (e) {
      console.log(e);
    }
  }
});
</script>

<style lang="scss"></style>
