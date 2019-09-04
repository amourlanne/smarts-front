<template>
  <header class="app-header">
    <v-popover placement="bottom" offset="14">
      <div
        role="button"
        class="organization-icon size-medium"
        style='background-image: url("https://d160fxxbwgar72.cloudfront.net/organizations/419538/9dca52bf340a7607299b4a4ab25a2b20ec80df38.png");'
      ></div>
      <template slot="popover">
        <div class="popover-navigation-view">
          <div class="popover-navigation-organization">
            <h1 class="popover-navigation-organization-name">
              Dotsafe
            </h1>
          </div>
          <ul class="standard-list popover-navigation-section">
            <li class="list-action">
              <a class="standard-list-item">People &amp; Teams</a>
            </li>
            <li class="list-action">
              <a class="standard-list-item"
                >Billing &amp; Organization Settings</a
              >
            </li>
            <li class="list-action">
              <a class="standard-list-item">Notification Settings</a>
            </li>
            <li class="list-action">
              <a class="standard-list-item">Support</a>
            </li>
            <li class="list-action">
              <a class="standard-list-item">Invite</a>
            </li>
            <li class="list-action">
              <a class="standard-list-item">Account Preferences</a>
            </li>
            <li class="list-action">
              <a class="standard-list-item">Logout</a>
            </li>
          </ul>
          <div
            class="app-menu-user-info list-action"
            data-action-id="user_info"
          >
            <div class="avatar-wrap">
              <div
                class="avatar size-large"
                style="background-image: url(https://d160fxxbwgar72.cloudfront.net/accounts/697205/cc007d00f46321cb943df4f8287621f0eb2337bb/large_2x.png)"
                alt="Alexis Mourlanne"
                data-account-id="697205"
                data-user-profile-popover="true"
              ></div>
            </div>
            <div class="app-menu-user-info-details">
              <h2 class="app-menu-user-info-name">Alexis Mourlanne</h2>
              <p class="app-menu-user-info-email">alexis.mourlanne@gmail.com</p>
            </div>
          </div>
        </div>
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
  .organization-icon {
    width: 32px;
    height: 32px;
    background-size: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .app-header-navigation {
    display: flex;
    flex: 1;
    margin-left: 36px;
    height: 100%;

    > :first-child {
      margin-left: -12px;
    }

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

        .app-header-navigation-item-text {
          font-size: 14px;
        }

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

.popover {
  .popover-navigation-view {
    .popover-navigation-organization {
      display: flex;
      align-items: center;
      height: 48px;
      padding-left: 16px;
      .popover-navigation-organization-name {
        padding-left: 10px;
        font-weight: 600;
        color: #444;
      }
    }
    .popover-navigation-section {
      li {
        padding-left: 16px;
        cursor: pointer;
      }
    }
    .list-action {
      &:hover {
        background-color: #f5f7fa;
        color: #2556b8;
      }
    }
    .standard-list {
      color: #757575;
      .standard-list-item {
        height: 28px;
        display: flex;
        align-items: center;
        font-size: 13px;
        padding-left: 10px;
      }
    }
    .app-menu-user-info {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 48px;
      .avatar-wrap {
        align-items: center;
        width: 36px;
        height: 100%;
        margin: 0 10px;
        background-position: 50%;
        background-repeat: no-repeat;
        display: flex;
        .avatar {
          width: 32px;
          height: 32px;
          background-size: 32px;
          font-size: 32px;
        }
      }
      .app-menu-user-info-details {
        margin-right: 20px;
        .app-menu-user-info-name {
          font-size: 13px;
          line-height: 1.4;
          font-weight: 600;
        }
        .app-menu-user-info-email {
          font-size: 12px;
          line-height: 1.4;
          color: #757575;
        }
      }
    }
  }
}
</style>
