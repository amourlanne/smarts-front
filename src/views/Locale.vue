<template>
  <section title="lang">
    <locale-changer />
    <router-view />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import LocaleChanger from "@/components/LocaleChanger.vue";

export default Vue.extend({
  name: "locale",
  components: {
    LocaleChanger
  }
});
</script>

<style lang="scss"></style>
