import axios from "axios";
import Tokenchange from "../mobx/Tokenchange";

const token = Tokenchange.access_token

const instance = axios.create({
    baseURL: 'http://45.148.31.152:8081/private',
  });

  instance.interceptors.request.use(function (config) {
    const token = Tokenchange.access_token
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  });

export default instance