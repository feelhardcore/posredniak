import { Link, useNavigate } from "react-router-dom"
import { Button1, Button2 } from "../buttons/buttons"
import { PageHeading1 } from "./heading"

export default function PostBrief(props){

    const nav = useNavigate()

    const content = props.content
    const link = "/post/"+content.pid

    const edit = () => {
        nav("/edit/"+content.pid)
    }

    return(
        <div className="post-brief">
            <Link to = {link}><PageHeading1 value = {content.title}></PageHeading1></Link>
            <div className="post-info-brief">
                <div className="brief-item">Dodane przez : <b>{content.name} {content.lastname}</b></div>
                <div className="brief-item">Dodane w dniu:  <b>{content.added} </b></div>
                <div className="brief-item">Ważne do:  <b>{content.valid} </b></div>
                {content.uid === props.id && <Button1 value = "Edytuj ofertę" fn = {edit}></Button1>}
            </div>

        </div>
        
    )
}