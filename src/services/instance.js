import axios from "axios";
import Tokenchange from "../mobx/Tokenchange";

const token = Tokenchange.access_token

const instance = axios.create({
    baseURL: 'https://concerned-growth-production.up.railway.app/private',
  });

  instance.interceptors.request.use(function (config) {
    const token = Tokenchange.access_token
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  });

export default instance