<?php 

    $servername = "localhost";
    $username = "admin";
    $password = "admin";
    $dbname = "baza_posrednik_pracy";
    $conn = new mysqli($servername, $username, $password,$dbname);
    if($conn->connect_error)
    {
        http_response_code(500);
        exit();
    }
?>