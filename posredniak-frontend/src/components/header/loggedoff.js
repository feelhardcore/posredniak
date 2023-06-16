import {Link} from 'react-router-dom'
export default function LoggedOff(){


    const login = () => {
        console.log("xd")
        
    }

    return(
        <>
            <div className="page-header-login">Nie jesteś zalogowany <Link to = "/zaloguj" className='link'>Zaloguj</Link></div>
            <div className="page-header-register">Nie masz konta? <Link to = "/rejestruj" className='link'>Rejestruj</Link></div>
        </>
    
    )
}