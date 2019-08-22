import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.withCredentials = true;

export default new Vuex.Store({
  state: {
    accessToken: window.$cookies.get("access_token") || "",
    currentUser: {},
    redirectUrl: "/"
  },
  mutations: {
    auth_success(state, payload) {
      state.accessToken = window.$cookies.get("access_token") || "";
      state.currentUser = payload.currentUser;
    },
    redirect_url(state, payload) {
      state.redirectUrl = payload.redirectUrl;
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/login", user)
          .then(response => {
            commit("auth_success", { currentUser: response.data });
            resolve(response);
          })
          .catch(error => {
            reject(error.response.data.error);
          });
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.accessToken
  }
});
