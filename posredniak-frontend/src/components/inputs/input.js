export default function Input(props)
{
    return(
        <div className="input-cus">
            <label htmlFor={props.name}>{props.label}</label>
            <input type = {props.type} name = {props.name} value = {props.value} onChange = {e=>props.onchangefn(e.target.value)}></input>
            <div className="input-help">dsfsfsfdsf</div>
        </div>
    )
}