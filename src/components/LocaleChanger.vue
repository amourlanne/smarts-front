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

export default Vue.extend({
  name: "locale-changer",
  data() {
    return {
      locales: this.$i18n.locales
    };
  },
  methods: {
    onChange() {
      const locale = this.$i18n.locale;
      console.log(this.$i18n);
      // @ts-ignore
      this.$router.push({
        name: this.$route.name,
        params: {
          ...this.$route.params,
          locale: locale == defaultLocale.code ? undefined : locale
        }
      });
    }
  }
});
</script>
