import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../components/inputs/input";
import SubmitRegister from "../scripts/formHandling/register";
import Validate from "../scripts/validation/validate";

export default function Register(props){

    const nav = useNavigate()

    const [name, setName] = useState("");
    const [lastname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setrepeatPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Validate(name,lastname,phone,email,password,repeatPassword)


        var form = new FormData();
        form.append("name" , name)
        form.append("lastname" , lastname)
        form.append("phone" , phone)
        form.append("email" , email)
        form.append("password" , password)

        SubmitRegister(form).then(res =>{

            var code = res.data
            nav(`/activate/${code}`)



        }).catch(err => {
            console.log(err)
        })

    }

    return(
        <div className="register">
            <form name = "register-form" onSubmit={(e) => handleSubmit(e)}>
                <Input type = "text" label = "Imię" name = "name" onchangefn = {setName}/>
                <Input type = "text" label = "Nazwisko" name = "lastname" onchangefn = {setlastName}/>
                <Input type = "text" label = "Email" name = "email" onchangefn = {setEmail}/>
                <Input type = "text" label = "Telefon" name = "phone" onchangefn = {setPhone}/>
                <Input type = "password" label = "Hasło" name = "password" onchangefn = {setPassword}/>
                <Input type = "password" label = "Powtórz hasło" name = "rpassword" onchangefn = {setrepeatPassword}/>

                <input type= "submit" value= "Rejestruj"/>
            </form>
        </div>
    )
    //<label htmlFor="name">Imię</label><input type = "text" name = "name" id = "name" onChange={(e) => setName(e.target.value)}></input>
    //<label htmlFor="name">Nazwisko</label><input type = "text" name = "lastname" id = "lastname" onChange={(e) => setlastName(e.target.value)}></input>
    //<label htmlFor="name">Email</label><input type = "text" name = "email" id = "email" onChange={(e) => setEmail(e.target.value)}></input>
    //<label htmlFor="name">Hasło</label><input type = "password" name = "password" id = "password" onChange={(e) => setPassword(e.target.value)}></input>
    //<label htmlFor="name">Powtórz hasło</label><input type = "password" name = "rpassword" id = "rpassword" onChange={(e) => setrepeatPassword(e.target.value)}></input>
    //<label htmlFor="name">Numer telefonu</label><input type = "text" name = "phone" id = "phone" onChange={(e) => setPhone(e.target.value)}></input>

}