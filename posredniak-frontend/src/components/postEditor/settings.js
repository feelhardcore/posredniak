import InlineDate from "../inputs/date-edit"
import InlineCheckBox from "../inputs/inline-checkbox"
import InlineEdit from "../inputs/inline-edit"

export default function PostSettings(props){

    const editable = props.editable

    return (
        <div className="post-section">
            <InlineCheckBox
            changefn = {props.changefn}
            editable = {editable}
            label = "Zezwalaj na aplikowanie"
            content = {props.content.allow_app.allow}
            id = "0"
            ></InlineCheckBox>
            <InlineCheckBox
            changefn = {props.changefn}
            editable = {editable}
            label = "Wymagaj CV"
            content = {props.content.allow_app.allow_cv}
            id = "1"
            ></InlineCheckBox>
            <InlineCheckBox
            changefn = {props.changefn}
            editable = {editable}
            label = "Wymagaj listu motywacyjnego"
            content = {props.content.allow_app.allow_letter}
            id = "2"
            ></InlineCheckBox>
            <InlineDate
            changefn = {props.changefn}
            editable = {editable}
            label = "Oferta ważna do"
            content = {props.content.valid}
            id = "3"
            ></InlineDate>
            <InlineCheckBox
            changefn = {props.changefn}
            editable = {editable}
            label = "Ukryj ofertę"
            content = {props.content.hidden}
            id = "4"
            ></InlineCheckBox>
        </div>
    )
}