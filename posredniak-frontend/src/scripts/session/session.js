import axios from 'axios'
axios.defaults.withCredentials = true;
const URL_BASE = "https://192.168.0.16/";
export function GetSession(){
    return axios.post(URL_BASE+"session/session_info.php")
}
export function ReadSessionInfo(){
    var data = JSON.parse(localStorage.getItem("userInfo")); 
    return data ? data : {
        "uid" : -1,
        "name" : null,
        "lastname" : null,
        "acc_lvl" : null
    }
}
export function SessionLogout(){
    var data = JSON.stringify({
        "uid" : -1,
        "name" : null,
        "lastname" : null,
        "acc_lvl" : null
    })
    axios.post(URL_BASE+"session/logout.php",{},{withCredentials:true}).then((e)=>{
        localStorage.setItem("userInfo", data)
        
        
    }).then(() => {window.location.href = '/'})
    
}

export function GetUserInfo(){
    
    return axios.get(URL_BASE+"session/session_user_info.php")
    
}

export function SetUserInfo(data){

    return axios.post(URL_BASE+"session/change_profile_info.php",data)

}