<template>
  <div>
    <Helmet>
      <title>Users</title>
    </Helmet>
    <ul>
      <li :key="user.id" v-for="user in users">
        {{ user.firstName }} {{ user.lastName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import userService from "@/services/user.service";
// @ts-ignore
import { Helmet } from "@jnields/vue-helmet";

export default Vue.extend({
  name: "users",
  components: { Helmet },
  data() {
    return {
      users: []
    };
  },
  async beforeMount() {
    try {
      // @ts-ignore
      this.users = await userService.getUsers();
    } catch (e) {
      console.log(e);
    }
  }
});
</script>

<style lang="scss"></style>
