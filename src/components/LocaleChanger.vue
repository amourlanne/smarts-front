<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" @change="onChange">
      <option
        v-for="locale in locales"
        :key="locale.code"
        :value="locale.code"
        >{{ locale.name }}</option
      >
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import locales from "@/locales";
import { defaultLocale } from "@/config/i18n";

export default Vue.extend({
  name: "locale-changer",
  data() {
    return {
      locales: locales
    };
  },
  methods: {
    onChange() {
      const locale = this.$i18n.locale;

      const routeOptions = {
        name: this.$route.name,
        query: this.$route.query,
        params: {
          ...this.$route.params,
          locale: locale == defaultLocale ? undefined : locale
        }
      };
      // @ts-ignore
      this.$router.push(routeOptions);
    }
  }
});
</script>
