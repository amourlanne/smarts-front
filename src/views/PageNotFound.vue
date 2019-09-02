<template>
  <div id="pageNotFound">
    <h3>{{ $t("pageNotFound") }}</h3>
    <p>{{ $t("brokenLink") }}</p>
    <router-link
      :to="this.$i18n.locale === locale ? '/' : `/${this.$i18n.locale}`"
      >{{ $t("backToSite") }}</router-link
    >
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
