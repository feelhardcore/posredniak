import axios from 'axios'
axios.defaults.withCredentials = true;
const URL_BASE = "https://192.168.0.16/";
export default function SubmitRegister(form){

    return axios.post(URL_BASE+"/register/register.php",form)

}