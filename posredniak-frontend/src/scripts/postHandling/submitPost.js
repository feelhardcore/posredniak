import axios from 'axios'
axios.defaults.withCredentials = true;
const URL_BASE = "https://192.168.0.16/";
export default function SubmitOffer(form){

    return axios.post(URL_BASE+"posts/add_new.php",form,{withCredentials:true})

}
export  function EditOffer(form){

    return axios.post(URL_BASE+"posts/edit_post.php",form,{withCredentials:true})

}