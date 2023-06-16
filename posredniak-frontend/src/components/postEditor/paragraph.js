import { useState } from "react";
import { Button1 } from "../buttons/buttons";
import { PageHeading1, PageHeading3 } from "../misc/heading";
import ListParagraph from "./listParagraph";
import TextParagraph from "./textParagraph";
/**
 * 
 * id, content, editable
 */
export default function Paragraph(props){

    const id = "paragraph-"+props.id;
    const elementid = props.id
    const content = props.content
    const editable = props.editable

    const generateContent = (content,editable) => {
        return(content.map((item, key)=>{
            if(item.type === "list"){
                return(
                    <ListParagraph 
                    editable = {editable}
                    id = {elementid+"."+key}
                    key = {key}
                    content = {item.content}
                    blurfn = {props.blurfn}
                    delitemfn = {props.delItemfn}
                    delfn = {props.delParagraphfn}
                    itemfn = {props.itemfn}
                    ></ListParagraph>
                )
            }

            return(
                <TextParagraph 
                editable = {editable} 
                id = {elementid+"."+key}
                key = {key}
                content = {item.content}
                blurfn = {props.blurfn}
                delfn = {props.delParagraphfn}
                ></TextParagraph>
            )

        }))
    }
    return(
        <div className="post-paragraph" id = {id}>
            <PageHeading3 id = {elementid+".sub"} value = {content.subtitle} editable = {props.editable} blurfn = {props.blurfn}/>
            {generateContent(content.content,props.editable)}
            {editable ? 
                <>
                <div className="add-btns">
                    <Button1 value = "Dodaj paragraf" fn = {() =>props.textfn(elementid)}></Button1>
                    <Button1 value = "Dodaj listę" fn = {() =>props.listfn(elementid)}></Button1>
                </div>
                <Button1 value = "Usuń sekcję" fn = {() =>props.delfn(elementid)}></Button1>
                </>
                
                :
                null
            }
            
            
            
            
        </div>
    )
}