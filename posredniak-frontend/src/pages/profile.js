import { useEffect } from "react";
import { useState } from "react";
import ProfileEditField from "../components/inputs/profile-edit";
import Loading from "../components/misc/loading";
import ReqLogin from "../components/misc/reqlogin";
import { GetUserInfo, ReadSessionInfo, SessionLogout, SetUserInfo } from "../scripts/session/session";
import {Button1} from "../components/buttons/buttons"
function Profile(props) {

    const userInfo = ReadSessionInfo();

    const [name,setName] = useState();
    const [lastName,setlastName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [joined,setJoined] = useState();

    const [ready,setReady] = useState(false)

    useEffect(() => {
        if(userInfo.uid === -1){return}
        GetUserInfo().then(res => {
            setName(res.data.name);
            setlastName(res.data.lastname)
            setPhone(res.data.phone)
            setEmail(res.data.email)
            setJoined(res.data.joined)

            setTimeout(() => {
                setReady(true)
            }, 1000);
        }).catch(e=>{
            alert("Nie jesteś zalogowany/na")
            SessionLogout()
        })
    },[userInfo.uid])

    const handleChange = () => {
        var data = {
            name,
            lastName,
            phone
        }
        var form = new FormData()
        for ( var key in data ) {
            form.append(key, data[key]);
        }
        SetUserInfo(form).then(res=>{
            alert("Poprawnie zapisano zmiany")

        }).catch(err=>
            alert(err.response.data))
    }

    return(
        <>
            {userInfo.uid === -1 ? <ReqLogin></ReqLogin>: 
            <div className="profile">
                {!ready ? <Loading/> : <>
                <ProfileEditField value = {name} fn = {setName} label = "Imię"/>
                <ProfileEditField value = {lastName} fn = {setlastName} label = "Nazwisko"/>
                <ProfileEditField value = {phone} fn = {setPhone} label = "Numer telefonu"/>
                <ProfileEditField value = {email}  label = "Email" notEditable = {true}/>
                <ProfileEditField value = {joined} label = "Data dołączenia" notEditable = {true}/>
                <div className="change-button"><Button1 value = "Zapisz zmiany" fn = {handleChange}></Button1></div>
                </>
                }
            </div>
            }
        </>
    )
}


export default Profile;