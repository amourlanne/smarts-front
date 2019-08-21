import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.withCredentials = true;

export default new Vuex.Store({
  state: {
    accessToken: window.$cookies.get("access_token") || "",
    currentUser: {}
  },
  mutations: {
    auth_success(state, payload) {
      state.accessToken = window.$cookies.get("access_token") || "";
      state.currentUser = payload.currentUser;
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/api/login", user)
          .then(resp => {
            commit("auth_success", { currentUser: resp.data });
            resolve(resp);
          })
          .catch(err => {
            console.error(err);
            reject(err);
          });
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.accessToken
  }
});
