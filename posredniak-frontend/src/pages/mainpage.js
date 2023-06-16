
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button1 } from "../components/buttons/buttons";
import { PageHeading1 } from "../components/misc/heading";
import Loading from "../components/misc/loading";
import PostBrief from "../components/misc/postBrief";
import { GetPostsBriefs } from "../scripts/postHandling/getPosts";
import { ReadSessionInfo } from "../scripts/session/session";

function MainPage(props) {

    const userInfo = ReadSessionInfo();
    const nav = useNavigate();

    const [ready,setReady] = useState(false);
    const [content, setContent] = useState({})
    useEffect(() => {
        GetPostsBriefs().then(res=> {
            setContent(res.data)
            setReady(true)
        })
        
    },[])


    const addNewPost = () => {
        nav("/new")
    }
    const generateBriefs = (content) => {
        return content.map((item, key) => {
            return (<PostBrief content = {item} key = {key} id = {userInfo.uid}></PostBrief>)
        })
    }

    console.log(userInfo)

    return(
        <>
            <PageHeading1 value = "Aktualne oferty pracy"></PageHeading1>
            {!ready ? <Loading/> : <>{generateBriefs(content)}</>}
            <Button1 value = "Dodaj własną ofertę" fn = {addNewPost}></Button1>
        </>
    )

}

export default MainPage;