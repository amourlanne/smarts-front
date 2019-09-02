<template>
  <div id="pageNotFound">
    <h3>{{ $t("pageNotFound") }}</h3>
    <p>{{ $t("brokenLink") }}</p>
    <router-link
      :to="
        this.$i18n.locale === process.env.VUE_APP_LOCALE
          ? '/'
          : `/${this.$i18n.locale}`
      "
      >{{ $t("backToSite") }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "page-not-found",
  data() {
    return {};
  },
  validations: {},
  methods: {}
};
</script>

<style scoped></style>
