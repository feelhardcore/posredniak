import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { Button1 } from "../components/buttons/buttons"
import { PageHeading1 } from "../components/misc/heading"
import Loading from "../components/misc/loading"
import PostInfo from "../components/postEditor/information"
import Paragraph from "../components/postEditor/paragraph"
import PostSettings from "../components/postEditor/settings"
import GetPost from "../scripts/postHandling/getPosts"

export default function PostViewer(props){

    const nav = useNavigate()
    const userInfo = localStorage.getItem("userInfo")
    const params = useParams()
    const id = params.id

    const [ready,setReady] = useState(false)
    const [content,setContent] = useState({})

    useEffect(() => {
        GetPost(id).then(res=> {
            var obj = res.data;
            obj.content = JSON.parse(obj.content)
            setContent(obj)
            setReady(true)
        })
    },[id])

    const generateParagraphs = (content) => {
        console.log(content)
        return(content.sections.map((paragraph,key) => {
            return <Paragraph
                id = {key}
                key = {key}
                content = {paragraph} 
                editable = {false}>
            </Paragraph>
        }))
    
    }
    const edit = () => {
        nav('/edit/'+id)
    }

    return(
        <>
        {(ready && content) ? 
        
        <>
            <PageHeading1
                editable = {false} 
                value = {content.content.title} 
            ></PageHeading1>
            {content.owner && <Button1 value = "Edytuj ofertę" fn = {edit}></Button1>}
            <PostInfo editable = {false} content = {content.content.info}></PostInfo>
            <PostSettings
            editable = {false}
            content = {content.content.config}
            ></PostSettings>
            {generateParagraphs(content.content)}
            {content.owner && <Button1 value = "Edytuj ofertę" fn = {edit}></Button1>}
        </>
        :
            <Loading/>
        }   
        </>
        
        
    )
}