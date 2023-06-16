import { Button1, Button2 } from "../buttons/buttons"

export default function ListParagraph(props){

    const id = "item-"+props.id
    const elementid = props.id

    const generateItems = (content, editable) => {
        return(content.map((item,key) => {
            return(
                <>
                    <li 
                    contentEditable = {editable} 
                    dangerouslySetInnerHTML = {{__html : item}} 
                    key = {key} 
                    id = {id+"-"+key}
                    onBlur = {e => props.blurfn(elementid+'.'+key,e.target.textContent)}
                    ></li>
                    {editable &&  <Button2 value = "Usuń element" fn = {() =>props.delitemfn(elementid+"."+key)}></Button2>}
                   
                </>
            )
                
        }))
    }

    return(
        <>
            <ul className = "list-paragraph post-item" id = {id}>
                {generateItems(props.content,props.editable)}
                
            </ul>
            {props.editable && 
            <>
                <Button1 value = "Dodaj element" fn = {() =>props.itemfn(elementid)}></Button1>
                <Button1 value = "Usuń listę" fn = {() =>props.delfn(elementid)}></Button1>
            </>
            }
            
        </>
        
    )
}