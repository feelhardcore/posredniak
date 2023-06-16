import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../components/inputs/input";
import SubmitLogin from "../scripts/formHandling/login";

export default function Login(props){

    const nav = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        var form = new FormData();
        form.append("email" , email)
        form.append("password" , password)

        SubmitLogin(form).then(res =>{

            console.log("200 OK")
            console.log(res)
            localStorage.setItem("userInfo",JSON.stringify(res.data))

        }).then(()=> {window.location.href = '/'}).catch(err => {
            alert(err.response.data.error)
        })

    }

    return(
        <div className="login">
            <form name = "login-form" onSubmit={(e) => handleSubmit(e)}>
                <Input type = "text" label = "Email" name = "email" onchangefn = {setEmail}/>
                <Input type = "password" label = "Hasło" name = "password" onchangefn = {setPassword}/>
                <input type= "submit" value= "Zaloguj"/>
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