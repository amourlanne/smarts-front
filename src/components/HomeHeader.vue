<template>
  <header class="app-header">
    <v-popover offset="16">
      <button class="">Dotsafe</button>
      <template slot="popover">
        <ul class="standard-list app-navigation-section app-menu-main-section">
          <li>
            <a
              class="standard-list-item list-action"
              data-action-id="people"
              role="menuitem"
              >People &amp; Teams</a
            >
          </li>
          <li>
            <a
              class="standard-list-item list-action"
              data-action-id="settings"
              role="menuitem"
              >Billing &amp; Organization Settings</a
            >
          </li>
          <li>
            <a
              class="standard-list-item list-action"
              data-action-id="notifications"
              role="menuitem"
              >Notification Settings</a
            >
          </li>
          <li>
            <a
              class="standard-list-item list-action has-arrow"
              data-action-id="show_support_menu"
              role="menuitem"
              >Support</a
            >
          </li>
          <li>
            <a
              class="standard-list-item list-action"
              data-action-id="invite"
              role="menuitem"
              >Invite</a
            >
          </li>
          <li>
            <a
              class="standard-list-item list-action"
              data-action-id="account_preferences"
              role="menuitem"
              >Account Preferences</a
            >
          </li>
          <li>
            <a
              class="standard-list-item list-action"
              data-action-id="logout"
              role="menuitem"
              >Logout</a
            >
          </li>
        </ul>
      </template>
    </v-popover>
    <ul class="app-header-navigation">
      <li class="app-header-navigation-item">
        <router-link to="./">
          <span class="app-header-navigation-item-text">
            <span class="navigation-selected-indicator"></span>
            Home
          </span>
        </router-link>
      </li>
      <li class="app-header-navigation-item">
        <router-link to="about">
          <span class="app-header-navigation-item-text">
            <span class="navigation-selected-indicator"></span>
            About
          </span>
        </router-link>
      </li>
      <li class="app-header-navigation-item">
        <router-link to="users">
          <span class="app-header-navigation-item-text">
            <span class="navigation-selected-indicator"></span>
            Users
          </span>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home-header",
  data() {
    return {};
  },
  methods: {}
});
</script>

<style lang="scss">
.app-header {
  background-color: white;
  display: flex;
  flex-direction: row;
  z-index: 1000;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
  padding: 0 16px;
  height: 53px;
  align-items: center;

  .app-header-navigation {
    display: flex;
    flex: 1;
    margin-left: 36px;
    height: 100%;

    .app-header-navigation-item {
      a {
        height: 100%;
        padding: 0 12px;
        border-radius: 26px;
        position: relative;
        color: #757575;
        font-weight: 400;
        white-space: nowrap;
        display: flex;
        align-items: center;

        &.router-link-exact-active {
          color: #111;
          .app-header-navigation-item-text {
            .navigation-selected-indicator {
              background-color: #42b983;
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              margin: 0 auto;
              height: 2px;
              max-width: 28px;
            }
          }
        }
      }
    }
  }
}

.tooltip {
  &.popover {
    border: 1px solid rgba(0, 0, 0, 0.16);
    box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.16);
    background-color: white;
  }
}
</style>
