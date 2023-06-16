export default function InlineCheckBox(props){

    const id = props.id

    return(
        <>
        {props.editable ? 
            <div className="inline-edit">
                <div className = "inline-edit-label">{props.label}</div>
                <div className= "inline-checkbox">
                    <input 
                    type = "checkbox" 
                    defaultChecked = {props.content}
                    onChange = {e => props.changefn(id,e.target.checked)}
                    ></input>
                </div>
            </div>
            :
            null}
        </>
    )
}