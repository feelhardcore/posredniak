import { Link } from "react-router-dom";
import { SessionLogout } from "../../scripts/session/session";
export default function LoggedIn(props){
    return (
        <div className="page-header-user-loggedin">
            <div className="page-header-user-info">Witaj <span className="bolder">{props.userInfo.name}</span></div>
            <div className="page-header-dropdown">
                <div className="page-header-dropdown-text">Menu</div>
                <div className="page-header-dropdown-menu">
                    <Link to = "/profil/"><div className="page-header-dropdown-item">Mój profil</div></Link>
                    <Link to = "/profil/oferty"><div className="page-header-dropdown-item">Moje oferty</div></Link>
                    <Link to = "/profil/aplikacje"><div className="page-header-dropdown-item">Moje aplikacje</div></Link>
                    {props.userInfo.acc_lvl === 1 ? <Link to = "/admin/"><div className="page-header-dropdown-item red">Panel administratora</div></Link> : null}
                  <div className="page-header-dropdown-item" onClick={() => SessionLogout()}>Wyloguj</div>
                </div>
            </div>
        </div>

    )
}