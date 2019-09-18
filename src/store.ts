import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    redirectUrl: null,
    accessToken: window.$cookies.get("access_token") || "",
    currentUser: null as Object | null
  },
  mutations: {
    auth_success(state, payload) {
      state.accessToken = window.$cookies.get("access_token") || "";
      state.currentUser = payload.currentUser;
    },
    logout(state, payload) {
      state.accessToken = "";
      state.currentUser = null;
      window.$cookies.remove("access_token");
    },
    set_currentUser(state, payload) {
      state.currentUser = payload.currentUser;
    },
    set_redirect_url(state, payload) {
      state.redirectUrl = payload.redirectUrl;
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("/login", user)
          .then(response => {
            commit("auth_success", { currentUser: response.data });
            resolve(response);
          })
          .catch(error => {
            reject(error.response.data.error);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.accessToken
  }
});
