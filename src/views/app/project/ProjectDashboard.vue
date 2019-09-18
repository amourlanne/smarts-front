<template>
  <div class="app-project-dashboard">
    <div class="container">
      <div class="row">
        <div class="col">
          Home
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "project-dashboard",
  data() {
    return {};
  },
  props: ["project"],
  async beforeMount() {}
});
</script>

<style lang="scss"></style>
