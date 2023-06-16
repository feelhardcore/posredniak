import { Button1, Button2 } from "../buttons/buttons"

export default function TextParagraph(props){

    const item_id = "item-"+props.id
    const id = props.id

    return(
        <>
            <div 
            contentEditable = {props.editable} 
            dangerouslySetInnerHTML = { {__html : props.content} }
            className = "text-paragraph post-item" 
            onBlur = {e => {props.blurfn(id,e.target.textContent)}}
            id = {item_id}
            >
            </div>
           {props.editable && <Button2 value = "Usuń paragraf" fn = {() =>props.delfn(id)}></Button2>}
        </>
        
    )
}