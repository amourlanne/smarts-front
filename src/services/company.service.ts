import axios from "axios";

export default {
  getAll(): Promise<[]> {
    return new Promise((resolve, reject) => {
      axios
        .get("/companies")
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
        .get(`/companies/${slug}`)
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
