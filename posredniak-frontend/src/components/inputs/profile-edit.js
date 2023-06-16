/**
 * 
 *  id, label, editable, value , fn()
 * 
 */

import { useState } from "react"

export default function ProfileEditField(props){

    const [mode,setMode] = useState(true);


    return(
        <div className="profile-edit-field">
            <div className="profile-edit-field-label">
                {props.label}
            </div>
            <div className="profile-edit-field-value">
                <div className="profile-value" style={mode? {display : "block"} : {display : "none"} }>
                        {props.value}
                </div>
                <div className="profile-input" style={mode? {display : "none"} : {display : "block"} }>
                        <input type = "text" defaultValue = {props.value} onChange = {e=> props.fn(e.target.value)}/>
                </div>
            </div>
            {props.notEditable ? null : <button onClick={() => setMode(!mode)}>{mode ? "Edytuj" : "Zakończ edycję"}</button>}
        </div>
    )
}