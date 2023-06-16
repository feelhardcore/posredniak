<?php

    error_reporting(E_ERROR);

    $allowed_origins = [
        "http://192.168.0.16",
        "http://posredniak.pro",
        "http://127.0.0.1",
        "http://localhost",
        "https://192.168.0.16:8080",
        "https://posredniak.pro",
        "https://127.0.0.1",
        "https://localhost",
        "https://192.168.0.16",
        "https://posredniak.pro",
        "https://127.0.0.1",
        "https://localhost",
        "https://192.168.0.16",
        "https://posredniak.pro",
        "https://127.0.0.1",
        "https://localhost:8080",
    ];
    if(isset($_SERVER["HTTP_ORIGIN"])){
        if(in_array($_SERVER["HTTP_ORIGIN"],$allowed_origins)){
            header("Access-Control-Allow-Origin: ". $_SERVER["HTTP_ORIGIN"]); 
        }
        if($_SERVER["REQUEST_METHOD"] == "OPTIONS"){
            header("Access-Control-Allow-Methods: GET ,POST, OPTIONS");           
            header("Access-Control-Max-Age: 3600"); 
            header("Access-Control-Allow-Credentials: true"); 
            header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");    
            header("HTTP/1.1 200 OK");
            exit();
        } 
    }
    
    


?>