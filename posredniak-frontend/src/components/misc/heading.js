export function PageHeading1(props){

    const id = props.id
    return(
        <div className="page-heading-1">
            {props.editable ? 
                <h1 onBlur={e=> {props.blurfn(id,e.target.textContent)}} contentEditable = {props.editable}  dangerouslySetInnerHTML = {{ __html : props.value}} ></h1>
                :
                <h1>{props.value}</h1>
            }
            
        </div>
    )
}
export function PageHeading2(props){

    return(
        <div className="page-heading-2">
            <h2 contentEditable = {props.editable} suppressContentEditableWarning = {true} >{props.value}</h2>
        </div>
    )
}
export function PageHeading4(props){

    return(
        <div className="page-heading-4">
            <h4 contentEditable = {props.editable} suppressContentEditableWarning = {true} >{props.value}</h4>
        </div>
    )
}
export function PageHeading3(props){
    const id = props.id
    return(
        <div className="page-heading-3">
            {props.editable ? 
                <h3 onBlur={e=> {props.blurfn(id,e.target.textContent)}} contentEditable = {props.editable}  dangerouslySetInnerHTML = {{ __html : props.value}} ></h3>
                :
                <h3>{props.value}</h3>
            }
            
        </div>
    )
}