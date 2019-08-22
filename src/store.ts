import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

declare global {
  interface Window {
    $cookies: any;
  }
}

export default new Vuex.Store({
  state: {
    accessToken: window.$cookies.get("access_token") || "",
    currentUser: {}
  },
  mutations: {},
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({
          url: "http://localhost:3000/api/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            console.log(resp);
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
