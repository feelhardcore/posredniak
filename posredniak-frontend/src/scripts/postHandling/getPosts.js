import axios from 'axios'
axios.defaults.withCredentials = true;
const URL_BASE = "https://192.168.0.16/";
export default function GetPost(id){

    return axios.get(URL_BASE+"posts/get_post.php?id="+id,{withCredentials:true})

}

export function GetPostsBriefs(){

    return axios.get(URL_BASE+"posts/get_post_list.php");

}

export function GetOwnPost(id){

    return axios.get(URL_BASE+"posts/get_own_post.php?id="+id,{withCredentials:true})

}