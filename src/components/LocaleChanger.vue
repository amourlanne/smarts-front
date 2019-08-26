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
      this.$cookies.set("lang", locale);
    }
  }
});
</script>
