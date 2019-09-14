<template>
  <div class="app-project-users">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Add user
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="list-group">
            <router-link
              v-for="user in users"
              :to="{ name: 'user', params: { username: user.username } }"
              :key="user.id"
              class="list-group-item list-group-item-action"
              >{{ user.firstName }} {{ user.lastName }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import projectService from "@/services/project.service";

export default Vue.extend({
  name: "project-users",
  data() {
    return {
      users: []
    };
  },
  async beforeMount() {
    const slug = this.$route.params.slug;
    try {
      // @ts-ignore
      this.users = await projectService.getUsers(slug);
    } catch (e) {
      console.log(e);
    }
  }
});
</script>

<style lang="scss"></style>
