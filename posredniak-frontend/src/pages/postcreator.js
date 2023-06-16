import { useEffect, useState } from "react"
import { PageHeading1 } from "../components/misc/heading"
import Paragraph from "../components/postEditor/paragraph"
import { useNavigate, useParams } from "react-router"
import { Button1 } from "../components/buttons/buttons"
import { GetUserInfo, ReadSessionInfo, SessionLogout } from "../scripts/session/session"
import ReqLogin from "../components/misc/reqlogin"
import PostInfo from "../components/postEditor/information"
import PostSettings from "../components/postEditor/settings"
import Loading from "../components/misc/loading"
import { Form } from "react-router-dom"
import SubmitOffer, { EditOffer } from "../scripts/postHandling/submitPost"
import { GetOwnPost } from "../scripts/postHandling/getPosts"

export default function PostEditor(props){

    const nav = useNavigate()

    const userInfo = ReadSessionInfo()
    const params = useParams()
    const postid = params.id;

    var postContent = {
        'title' : 'Wpisz tu nazwę oferty...',
        'sections' : [
            {
            'subtitle' : "Wpisz nazwę sekcji...",
            'content' : 
            [
                {
                    'type' : 'text',
                    'content' : 'Wpisz tekst paragrafu'
                },
                {
                    'type' : 'list',
                    'content' : [
                        "Wpisz element listy",
                        'Wpisz element listy',
                    ]
                },
            ]
            }
        ],
        'info':{
            'country' : 'Polska',
            'region' : 'podlaskie',
            'hours' : 'pełen etat',
            'pay' : "5000 PLN",
            'phone' : 123456789,
            'email' : userInfo.email
        },
        "config" : {
            "allow_app" : {
                'allow_cv' : true,
                'allow_letter' : true,
                'allow' : true
            },
            "valid" : new Date(Date.now()+2629800000).toISOString().substring(0,10),
            "hidden" : false
        }

    }
    if(props.content){
        postContent = props.content
    }

    


    const deleteSection =  (target) =>{
        var newContent = content
        newContent.sections.splice(target,1)
        setContent({...newContent});
    }
    

    const [content,setContent] = useState(postContent)
    const [paragraphs,setParagraphs] = useState(postContent.sections.length)
    const [ready,setReady] = useState(false)

    const generateParagraphs = (content) => {
        return(content.sections.map((paragraph,key) => {
            console.log("generating...")
            console.log("Section " +key)
            console.log(paragraph)
            return <Paragraph 
                id = {key}
                key = {key}
                content = {paragraph} 
                textfn = {addTextParagraph} 
                delfn = {deleteSection} 
                blurfn = {onElementBlur} 
                listfn = {addListParagraph}
                itemfn = {addItemToList}
                delItemfn = {deleteItem} 
                delParagraphfn = {deleteParagraph}
                editable = {true}>
            </Paragraph>
        }))
    
    }


    

    const addSection = () =>  {
        var empty = {
            'subtitle' : "Sekcja "+(paragraphs+1),
            'content' : 
            [
                {
                    'type' : 'text',
                    'content' : 'Paragraf 1'
                },
            ]
            }
        var newContent = content
        newContent.sections.push(empty);
        setContent({
            ...newContent  
        })
        console.log(newContent)
    }

    const onElementBlur = (target,value) => {
        console.log("ON blur on "+target)
        
        var newContent = content;
        var index

        if(target.includes(".sub")){
            index = target.replace(".sub","")
            newContent.sections[index].subtitle = value       
        }
        else if(target.includes(".info")){
            index = target[0]
            switch(index){
                case '0':
                    newContent.info.country = value
                    break;
                case '1':
                    newContent.info.region = value
                    break;
                case '2':
                    newContent.info.hours = value
                    break;
                case '3':
                    newContent.info.pay = value
                    break;
                case '4':
                    newContent.info.email = value
                    break;        
                case '5':
                    newContent.info.phone = value
                    break;        
                default:
                    break;
            }
        }
        
        else if(target === 'title'){
            newContent.title = value
        }   
        else{
            index = target.split('.')

            if(index.length === 2){
                newContent.sections[index[0]].content[index[1]].content = value
            }
            else{
                newContent.sections[index[0]].content[index[1]].content[index[2]] = value
            }
        }
        setContent({...newContent})

    }

    
    const addTextParagraph = (target) => {

        console.log("Target is "+ target)
        
        var empty = {
            'type' : 'text',
            'content' : 'Tekst paragrafu'
        }
        var newContent = content
        newContent.sections[target].content.push(empty);
        setContent({
            ...newContent
        })
    }

    const addListParagraph = (target) => {
        var empty = {
            'type' : 'list',
            'content' : [
                "Element 1"
            ]
        }
        var newContent = content
        newContent.sections[target].content.push(empty);
        setContent({
            ...newContent
        })
    }

    const addItemToList = (target) => {
        var index = target.split(".")
        var newContent = content
        newContent.sections[index[0]].content[index[1]].content.push("Element")
        setContent({
            ...newContent
        })
    } 

    const deleteParagraph = (target) => {
        console.log("DELETE" + target)
        var index = target.split(".")
        var newContent = content
        newContent.sections[index[0]].content.splice(index[1],1)
        setContent({
            ...newContent
        })

    }

    const deleteItem = (target) => {
        console.log(target)
        var index = target.split(".")
        var newContent = content
        newContent.sections[index[0]].content[index[1]].content.splice(target,1)
        setContent({
            ...newContent
        })

    }

    const onElementChange = (target,value) => {
        var newContent = content
        var index = target
        console.log(value)
        switch(index){
            case '0':
                newContent.config.allow_app.allow = value
                break;
            case '1':
                newContent.config.allow_app.allow_cv = value
                break;
            case '2':
                newContent.config.allow_app.allow_letter = value
                break;
            case '3':
                newContent.config.valid = value
                break;
            case '4':
                newContent.config.hidden = value
                break;     
            default:
                break;
        }
        setContent({
            ...newContent
        })
        console.log(newContent)
    }

    const sumbitOffer = () => {
        var form = new FormData()
        form.append("content", JSON.stringify(content))
        if(postid){
            form.append("pid", postid)
            EditOffer(form).then( nav("/post/"+postid) )
        }
        else
        SubmitOffer(form).then(
            nav('/')
        )
    }

    useEffect(() => {
        if(ready) return;
        if(postid){
            GetOwnPost(postid).then(res => {
                setContent(JSON.parse(res.data.content))
                setReady(true)
            }).catch(err=>{
                alert(err.response.data.error)
                nav('/')
            })
        }
        else
        GetUserInfo().then(res => {
            var newContent = content
            newContent.info.phone = res.data.phone
            newContent.info.email = res.data.email
            console.log(newContent)
            setContent({
                ...newContent
            })
            setReady(true)
        }).catch(e=>{
            alert("Nie jesteś zalogowany/na")
            SessionLogout()
        })
    },[content,ready, postid])

    return(
        <>
        {ready ?
            <>
            {userInfo.uid  !== -1 ? <div className="post-creator" id = 'post-creator'>
            <PageHeading1 
                editable = {true} 
                value = {content.title} 
                id = "title"
                blurfn = {onElementBlur}
            ></PageHeading1>
            <Button1 value = {postid ? "Zapisz zmiany":"Dodaj ofertę"} fn = {sumbitOffer}></Button1>
            <PostInfo blurfn = {onElementBlur} editable = {true} content = {content.info}></PostInfo>
            <PostSettings
            editable = {true}
            changefn = {onElementChange}
            content = {content.config}
            ></PostSettings>
            {generateParagraphs(content)}
            <Button1 value = "Dodaj sekcję" fn = {addSection}></Button1>
            <Button1 value = {postid ? "Zapisz zmiany":"Dodaj ofertę"} fn = {sumbitOffer}></Button1>
        </div> : <ReqLogin></ReqLogin>}
            </>
            
        :
        
        <Loading></Loading>
    
        }
        
        </>
        
    )
}