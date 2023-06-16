import axios from 'axios'
axios.defaults.withCredentials = true;
const URL_BASE = "http://127.0.0.1:8000/";
export default function Validate(name,lastname,phone,email,password,rpassword){
    var data = {
        success: true,
        errors: {
            "name" : [],
            "lastname" : [],
            "phone" : [],
            "email" : [],
            "password" : [],
            "rpassword" : [] 
        }
    }

    //name validate

    data.errors.name = ValidateName(name)


    return data;
}
function ValidateString(string){
    if(string == ""){
        return ["Pole nie może być puste"]
    }

}

function ValidateName(name){
    ValidateString(name)

}
function ValidateLastName(){

}
function ValidateEmail(){

}

function IsEmailInUse(email){
    var form = new FormData();
    form.append("email",email);
    axios.post(URL_BASE+"register/doesuserexists.php",form).then(
        res => {
            console.log(res);
        }
    ).catch(
        err => {

        console.log(err);
    })
}