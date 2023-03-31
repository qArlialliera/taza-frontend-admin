import axios from 'axios';
import Tokenchange from '../mobx/Tokenchange';



const USERS_LOGIN_REST_API_URL = "http://localhost:8080/public/auth/login";
const COMPANIES_ADD_REST_API_URL = "http://localhost:8080/private/companies/add";
const COMPANIES_ALL_LIST_REST_API_URL = "http://localhost:8080/private/companies/all";



// const token = localStorage.getItem('token');
const token = Tokenchange.access_token
console.log(token)
const config = {
    headers: { 
        'Authorization': `Bearer ${token}` ,
    },
};

class UserService {


    loginUser(data){
        return axios.post(USERS_LOGIN_REST_API_URL, data)
    }

    addcompany(data){
        return axios.post(COMPANIES_ADD_REST_API_URL, data, config)
    }

    getListcompany(){
        return axios.get(COMPANIES_ALL_LIST_REST_API_URL, config)
    }
    
}

export default new UserService();