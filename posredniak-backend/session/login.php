<?php 

    //error_reporting(0);

    $allowed_methods = [
        "POST",
    ];

    include __DIR__."/../session/session.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    include __DIR__."/../data_sanitize/sanitize.php";
    include __DIR__."/../database/connect.php";
    $data = $_POST;

    $email = $data["email"];
    $given_password = $data["password"];

    if(!(isset($data["email"]) && isset($data["password"]))){
        header("Content-Type: application/json");
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(array("error" => "Błąd przetwarzania żądania: kod 1"));
        exit();
    }



    $sql = "SELECT * from users where EMAIL = ?";
    $userquery = $conn->prepare($sql);
    $userquery->bind_param("s",$email);
    try{
        $userquery->execute();
    }
    catch(mysqli_sql_exception $e){
        header("Content-Type: application/json");
        header("HTTP/1.1 500 Internal Server Error");
        echo json_encode(array("error" => "Błąd przetwarzania żądania: kod 2"));
        $userquery->close();
        $conn->close();
        exit();
    }
    $userqueryResult = $userquery->get_result();

    $userquery->close();
    $conn->close();

    if($userqueryResult->num_rows == 0)
    {
        header("Content-Type: application/json");
        header("HTTP/1.1 404 Not Found");
        echo json_encode(array("error" => "Podano błędne dane logowania"));
        exit();
    }

    $user = $userqueryResult->fetch_assoc();

    if($user["STATUS"] != 2)
    {
        header("Content-Type: application/json");
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(array("error" => "Na to konto nie mozna sie zalogować (zablokowane lub nieaktywne)"));
        exit();
    }

    $stored_password = $user["PASSWORD_HASHED"];
    

    if(!password_verify($given_password,$stored_password)){
        header("Content-Type: application/json");
        header("HTTP/1.1 404 Not Found");
        echo json_encode(array("error" => "Podano błędne dane logowania"));
        exit();
    }

    $_SESSION["uid"] = $user["USER_ID"];
    $_SESSION["name"] = $user["NAME"];
    $_SESSION["lastname"] = $user["LASTNAME"];
    $_SESSION["acc_lvl"] = $user["ACC_TYPE"];
    
    $session_info = array("uid" => $_SESSION["uid"],"name" => $_SESSION["name"],"lastname" => $_SESSION["lastname"],"acc_lvl" => $_SESSION["acc_lvl"]);
    header('Content-type: application/json');
    echo json_encode($session_info);

?>