import { useParams } from "react-router"

export default function Activate(props){

    const params = useParams()
    const url = "http://192.168.0.16:8000/register/activate.php?c="+params.code

    return(
        <div className="activate-acc">
            Aplikacja w załozneniu ten link wysle na maila podanego przy rejestracji<br/>
            Link : <a href = {url}>{url}</a>

        </div>
    )
    
}