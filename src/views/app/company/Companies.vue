<template>
  <div class="companies">
    <Helmet>
      <title>Companies</title>
    </Helmet>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="list-group">
            <router-link
              v-for="company in companies"
              :to="{
                name: 'company',
                params: { slug: company.slug }
              }"
              :key="company.id"
              class="list-group-item list-group-item-action"
              >{{ company.name }}</router-link
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
import companyService from "../../../services/company.service";

export default Vue.extend({
  name: "companies",
  components: { Helmet },
  data() {
    return {
      companies: []
    };
  },
  async beforeMount() {
    this.$router.push({ name: "page-not-found", params: this.$route.params });
    try {
      this.companies = await companyService.getAll();
    } catch (e) {
      // console.log(e);
    }
  }
});
</script>

<style lang="scss"></style>
