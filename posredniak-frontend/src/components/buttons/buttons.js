export function Button1(props){
    
    return(
        <div className="button-1" onClick={() => props.fn()}>
            {props.value}
        </div>
    )
}
export function Button2(props){
    
    return(
        <div className="button-2" onClick={() => props.fn()}>
            {props.value}
        </div>
    )
}