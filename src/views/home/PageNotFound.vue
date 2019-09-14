<template>
  <div id="page-not-found">
    <h3>{{ $t("pageNotFound") }}</h3>
    <p>{{ $t("brokenLink") }}</p>
    <router-link :to="{ name: 'home' }">{{ $t("backToSite") }}</router-link>
  </div>
</template>

<script>
export default {
  name: "page-not-found",
  data() {
    return {
      locale: process.env.VUE_APP_LOCALE
    };
  },
  validations: {},
  methods: {}
};
</script>

<style scoped></style>
