<?php

    error_reporting(0);

    $allowed_methods = [
        "POST",
    ];
    include __DIR__."/../scripts/scripts.php";
    include __DIR__."/../session/session.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    include __DIR__."/../data_sanitize/sanitize.php";
    include __DIR__."/../database/connect.php";
    $data = $_POST;

    $name = $data["name"];
    $lastname = $data["lastname"];
    $password = $data["password"];
    $phone = $data["phone"];
    $email = $data["email"];

    if(
        isset($data["name"]) && 
        isset($data["lastname"]) &&
        isset($data["email"]) &&
        isset($data["phone"]) &&
        isset($data["password"]))
    {



        $fields= [
            "name" => "string",
            "email" => "email",
            "lastname" => "string",
            "phone" => "string",
            "password" => "string"
        ];
        $data_sanitized = sanitize($data,$fields);

    }
    else
    {
        header("Content-Type: application/json");
        header("HTTP/1.1 500 Internal Server Error");
        echo json_encode(array("error" => "Błąd przetwarzania żądania kod 1"));
        exit();
    }
    $hash_password = password_hash($data["password"],null);
    $date = $_SERVER["REQUEST_TIME"];
    $sql = "INSERT into USERS VALUES (null, ?, ?, ?, ?, ?, null, 2, FROM_UNIXTIME($date) , 1)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $data["email"],$data["phone"],$hash_password,$data["name"],$data["lastname"]);
    try{
        $stmt->execute();
    
    }
    catch(mysqli_sql_exception $e){
        header("Content-Type: application/json");
        header("HTTP/1.1 500 Internal Server Error");
        echo json_encode(array("error" => "Błąd przetwarzania żądania: kod 2"));
        exit();
    }

    $time = $_SERVER["REQUEST_TIME"]+3600;
    $code = generateRandomString(20);
    $sql = "SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'baza_posrednik_pracy' AND TABLE_NAME = 'users'";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
        $id = $row["AUTO_INCREMENT"]-1;
        header("HTTP/1.1 201 Created");
        $sql = "INSERT into activations VALUES($id,'$code',FROM_UNIXTIME($time))";
        $conn->query($sql);
        echo $code;
    }
    $conn->close();
?>