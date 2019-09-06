<template>
  <div class="locale-changer dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="localChanger"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ localeData.name }}
    </a>
    <div
      class="dropdown-menu dropdown-menu-right"
      aria-labelledby="localChanger"
    >
      <a
        v-for="locale in locales"
        v-if="locale !== localeData"
        :key="locale.code"
        v-on:click="localeSelect(locale)"
        class="dropdown-item"
        >{{ locale.name }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import locales from "@/locales.json";

export default Vue.extend({
  name: "locale-changer",
  data() {
    return {
      locales: locales,
      localeData: { name: null, code: null }
    };
  },
  mounted() {
    // this.localeData = <any>this.locales.find(
    //   locale => locale.code === this.$i18n.locale
    // );
  },
  methods: {
    localeSelect(locale: any) {
      this.localeData = locale;
      this.$i18n.locale = locale.code;

      const routeOptions = {
        name: this.$route.name,
        query: this.$route.query,
        params: {
          ...this.$route.params,
          locale: locale == process.env.VUE_APP_LOCALE ? undefined : locale.code
        }
      };
      // @ts-ignore
      this.$router.replace(routeOptions);
    }
  }
});
</script>
