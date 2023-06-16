import InlineDate from "../inputs/date-edit"
import InlineEdit from "../inputs/inline-edit"

export default function PostInfo(props){

    const editable = props.editable

    return (
        <div className="post-section">
            <InlineEdit
            blurfn = {props.blurfn}
            editable = {props.editable}
            label = "Kraj"
            content = {props.content.country}
            id = "0.info"
            ></InlineEdit>
            <InlineEdit
            blurfn = {props.blurfn}
            editable = {props.editable}
            label = "Województwo"
            content = {props.content.region}
            id = "1.info"
            ></InlineEdit>
            <InlineEdit
            blurfn = {props.blurfn}
            editable = {props.editable}
            label = "Wymiar pracy"
            content = {props.content.hours}
            id = "2.info"
            ></InlineEdit>
            <InlineEdit
            blurfn = {props.blurfn}
            editable = {props.editable}
            label = "Płaca brutto"
            content = {props.content.pay}
            id = "3.info"
            ></InlineEdit>
            <InlineEdit
            editable = {editable}
            blurfn = {props.blurfn}
            label = "Telefon kontaktowy"
            content = {props.content.phone}
            id = "4.info"
            ></InlineEdit>
            <InlineEdit
            editable = {editable}
            blurfn = {props.blurfn}
            label = "Email kontaktowy"
            content = {props.content.email}
            id = "4.info"
            ></InlineEdit>
        </div>
    )
}