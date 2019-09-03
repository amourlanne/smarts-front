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
import locales from "@/locales.json";

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
          locale: locale == process.env.VUE_APP_LOCALE ? undefined : locale
        }
      };
      // @ts-ignore
      this.$router.replace(routeOptions);
    }
  }
});
</script>
