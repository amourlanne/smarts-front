<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" @change="onChange">
      <option v-for="(value, key) in langs" :key="key" :value="key">{{
        value
      }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { defaultLocale } from "@/config/i18n";

export default Vue.extend({
  name: "locale-changer",
  data() {
    return {
      langs: {
        fr: "Français",
        en: "English"
      }
    };
  },
  methods: {
    onChange() {
      const locale = this.$i18n.locale;
      // @ts-ignore
      this.$router.push({
        name: this.$route.name,
        params: {
          ...this.$route.params,
          lang: locale == defaultLocale ? undefined : locale
        }
      });
    }
  }
});
</script>
