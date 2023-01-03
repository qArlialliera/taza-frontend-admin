import axios from 'axios';



const USERS_LOGIN_REST_API_URL = "http://localhost:8080/swagger-ui.html/signIn";



const token = localStorage.getItem('token');
const config = {
    headers: { 'Authorization': `Bearer ${token}` }
};

class UserService {


    loginUser(){
        return axios.post(USERS_LOGIN_REST_API_URL)
    }

    // forgotPassword(email){
    //     return axios.put(USERS_PASS_REST_API_URL, null, {params: {email}})
    // }

    // activateAccount(email, uuid){
    //     return axios.put(USERS_ACTIVATE_REST_API_URL, null, {params: {email, uuid}})
    // }

    // getAccount(){
    //     return axios.get(USERS_ACC_REST_API_URL, config);
    // }

    // resetPassword(oldPassword, newPassword){
    //     return axios.put(USERS_RESET_REST_API_URL, null, {params: {oldPassword, newPassword}}, config)
    // }

    // updateData(user){
    //     return axios.put(USERS_UPDATE_REST_API_URL, user, config)
    // }
    
}

export default new UserService();