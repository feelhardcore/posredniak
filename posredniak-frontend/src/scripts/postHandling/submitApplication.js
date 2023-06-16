import axios from 'axios'
axios.defaults.withCredentials = true;
const URL_BASE = "https://192.168.0.16/";
export default function SubmitApplication(form){

    return axios.post(URL_BASE+"posts/apply.php",form,{withCredentials:true})

}