import axios from 'axios';
import Tokenchange from '../mobx/Tokenchange';



const USERS_LOGIN_REST_API_URL = "https://concerned-growth-production.up.railway.app/public/auth/login";
const COMPANIES_ADD_REST_API_URL = "https://concerned-growth-production.up.railway.app/private/companies/add";
const COMPANIES_ALL_LIST_REST_API_URL = "https://concerned-growth-production.up.railway.app/private/companies/all";



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
    getUserData(){
        return axios.get('https://concerned-growth-production.up.railway.app/private/user/user-details', config)
    }
    getUserPhoto(photo){
        return axios.get(`https://concerned-growth-production.up.railway.app/public/file/photo/get/${photo}`)
    }
}

export default new UserService();