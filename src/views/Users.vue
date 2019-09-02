<template>
  <section title="users">
    <ul>
      <li :key="user.id" v-for="user in users">
        {{ user.firstName }} {{ user.lastName }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import userService from "@/services/user.service";

export default Vue.extend({
  name: "users",
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
