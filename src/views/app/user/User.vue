<template>
  <div class="app-user" v-if="user">
    <Helmet>
      <title>{{ user.firstName }} {{ user.lastName }}</title>
    </Helmet>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="app-user" v-if="user">
            <div>{{ user.firstName }} {{ user.lastName }}</div>
            <div>{{ user.email }}</div>
            <div v-if="user.company">{{ user.company.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import userService from "@/services/user.service";
// @ts-ignore
import { Helmet } from "@jnields/vue-helmet";

export default Vue.extend({
  name: "user",
  components: { Helmet },
  data() {
    return {
      user: null
    };
  },
  async beforeMount() {
    const username = this.$route.params.username;
    try {
      // @ts-ignore
      this.user = await userService.getUserByUsername(username);
    } catch (e) {
      // console.log(e);
    }
  }
});
</script>

<style lang="scss"></style>
