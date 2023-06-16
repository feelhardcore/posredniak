
import { useEffect, useState, useSyncExternalStore } from "react";
import { useNavigate, useParams } from "react-router";
import { Button1 } from "../components/buttons/buttons";
import { PageHeading1 } from "../components/misc/heading";
import Loading from "../components/misc/loading";
import PostBrief from "../components/misc/postBrief";
import GetPost, { GetPostsBriefs } from "../scripts/postHandling/getPosts";
import SubmitApplication from "../scripts/postHandling/submitApplication";
import { ReadSessionInfo } from "../scripts/session/session";

function ApplyPage(props) {

    const userInfo = ReadSessionInfo();
    const params = useParams()
    const nav = useNavigate();
    const [cv,setCV] = useState()
    const [letter,setLetter] = useState()

    const [ready,setReady] = useState(false)
    const submitApplication = () => {
        let form = new FormData()
        form.append("pid", params.id)
        form.append("cv",cv,"CV.pdf")
        form.append("letter",letter,"letter.pdf")
        console.log(letter)

        SubmitApplication(form).then()
    }

    useEffect(() => {
        GetPost(params.id).then(res => {
            let content = JSON.parse(res.data.content)
            if(!content.config.allow_app.allow){
                alert("Ta oferta ma wyłączony system aplikacji")
                nav("/post/"+params.id)
            }
        })
    },[nav,params])

    const cvchange = (e) => {
        setCV(e)
    }
    const letterchange = (e) => {
        setLetter(e)
    }

    return(
        <div className="apply-page">
            <div className="apply-label" >CV</div><input type ="file" id = "cv" onChange={e => cvchange(e.target.files[0])}></input>
            <div className="apply-label" >List motywacyjny</div><input type ="file" id = "letter" onChange={e => letterchange(e.target.files[0])}></input>
            <Button1 value = "Aplikuj" fn = {submitApplication}></Button1>
        </div>
    )

}

export default ApplyPage;