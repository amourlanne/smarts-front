import axios from "axios";

export default {
  getAll(): Promise<[]> {
    return new Promise((resolve, reject) => {
      axios
        .get("/projects")
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response.data.error);
        });
    });
  },
  getBySlug(slug: string): Promise<Object> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/projects/${slug}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response.data.error);
        });
    });
  },
  getUsers(slug: string): Promise<Object> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/projects/${slug}/users`)
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
