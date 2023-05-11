import axios from "axios";
import Tokenchange from "../mobx/Tokenchange";

const token = Tokenchange.access_token

const instance = axios.create({
    baseURL: 'http://localhost:8080/private',
  });

  instance.interceptors.request.use(function (config) {
    // let token = JSON.parse(window.sessionStorage.getItem("accessToken"));
    const token = Tokenchange.access_token
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  });

export default instance