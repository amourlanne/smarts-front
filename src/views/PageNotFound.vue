<template>
  <div id="pageNotFound">
    <h3>{{ $t("pageNotFound") }}</h3>
    <p>{{ $t("brokenLink") }}</p>
    <router-link
      :to="this.$i18n.locale === defaultLocale ? '/' : `/${this.$i18n.locale}`"
      >{{ $t("backToSite") }}</router-link
    >
  </div>
</template>

<script>
import { defaultLocale } from "../config/i18n";

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
