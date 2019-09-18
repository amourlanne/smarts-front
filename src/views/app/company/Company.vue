<template>
  <div class="company" v-if="company">
    <Helmet>
      <title>{{ company.name }}</title>
    </Helmet>
    {{ company.name }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { Helmet } from "@jnields/vue-helmet";
import companyService from "../../../services/company.service";

export default Vue.extend({
  name: "company",
  components: { Helmet },
  data() {
    return {
      company: null as Object | null
    };
  },
  watch: {
    async "$route.params.slug"(to, from) {
      if (to !== from) {
        await this.getCompany(to);
      }
    }
  },
  methods: {
    async getCompany(slug: string) {
      try {
        this.company = await companyService.getBySlug(slug);
      } catch (e) {
        // console.log(e);
      }
    }
  },
  async beforeMount() {
    const slug = this.$route.params.slug;
    await this.getCompany(slug);
  }
});
</script>

<style lang="scss"></style>
