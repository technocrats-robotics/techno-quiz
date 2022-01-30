import axios from "axios";
import URL from "./config/server";
// Implementation should be using Redux
const register = (name, email, password) => {
    return axios.post(URL + "api/auth/register", {
        name,
        password,
        email,
    });
};

const login = (email, password) =>{
    return axios.post(URL+"api/auth/login",{
        email, password
    }).then((response)=>{
        if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    })
}

const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    register, login, logout
}
export default authService;