export default function InlineDate(props){

    const id = props.id

    return(
        <div className="inline-edit">
            <div className = "inline-edit-label">{props.label}</div>
            {props.editable ? 
            <div className="inline-edit-date">
                <input type = "date" onChange = {e=> {props.changefn(id,e.target.value)}} defaultValue={props.content}></input>
            </div> 
            : 
            <div className="inline-text">
                {props.content}
            </div>}
            
        </div>
    )
}