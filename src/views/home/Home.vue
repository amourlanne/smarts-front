<template>
  <div class="app">
    <home-header></home-header>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import HomeHeader from "@/components/HomeHeader.vue";
import userService from "../../services/user.service";
import { mapState } from "vuex";

export default Vue.extend({
  name: "home",
  components: { HomeHeader },
  computed: mapState(["currentUser"]),
  methods: {},
  async beforeMount() {
    if (!this.currentUser) {
      try {
        const user = await userService.getMe();
        this.$store.commit("set_currentUser", { currentUser: user });
      } catch (e) {
        // console.log(e);
      }
    }
  }
});
</script>

<style lang="scss">
.app {
  text-align: center;
}
</style>
