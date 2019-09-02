import axios from "axios";

export default {
  login(user: Object) {
    return new Promise((resolve, reject) => {
      axios
        .post("/login", user)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error.response.data.error);
        });
    });
  },
  getUsers() {
    return new Promise((resolve, reject) => {
      axios
        .get("/users")
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response.data.error);
        });
    });
  }
};

// add client
