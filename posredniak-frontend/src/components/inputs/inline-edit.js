export default function InlineEdit(props){

    const id = props.id

    return(
        <div className="inline-edit">
            <div className = "inline-edit-label">{props.label}</div>
            {props.editable ? <div 
            className = "inline-edit-text"
            contentEditable
            onBlur = {e=> props.blurfn(id,e.target.textContent)}
            dangerouslySetInnerHTML = {{__html : props.content}}
            ></div> : <div className="inline-text">
                {props.content}
                </div>}
            
        </div>
    )
}