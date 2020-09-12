import axios from "axios";
// L30nard0.25**
const API_URL = "http://localhost:4000/api/";

class UserSetStatus {
  login(username, password) {
    debugger
    return axios
      .post(API_URL + "user/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.href='/';
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const lUser = localStorage.getItem("user");
    try {
      return JSON.parse(lUser);
    } catch (ex) {
      return null;
    }

  }
}

export default new UserSetStatus();