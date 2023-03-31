import axios from "axios";
import Tokenchange from "../mobx/Tokenchange";

const token = Tokenchange.access_token

export const instance = axios.create({
    baseURL: 'http://localhost:8080/private',
    // headers: {'Authorization': `Bearer ${token}`}
  });