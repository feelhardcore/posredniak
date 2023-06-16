import LoggedOff from "./loggedoff"
import LoggedIn from "./loggedin"
import { Link } from "react-router-dom"

export default function Header(props){


    const data = JSON.parse(localStorage.getItem("userInfo"))

    const userInfo = data ? data : {
        "uid" : -1,
        "name" : null,
        "lastname" : null,
        "acc_lvl" : null
    }

    if(userInfo.uid === -1){
        console.log("false")
    }

    const infopanel = () => {
        return(  userInfo.uid > -1  ?  <LoggedIn userInfo = {userInfo}></LoggedIn> : <LoggedOff></LoggedOff>

    )}
    return(
        <div className="page-header" id = "page-header">
            <Link to = "/"><div className="page-logo">Tu ma być logo xd</div></Link>
            <div className="page-header-user">{infopanel()}</div>
        </div>
    )

}