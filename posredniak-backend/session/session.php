<?php
    include __DIR__."/cors.php";
    header('Access-Control-Allow-Headers: Content-Type');
    header("Access-Control-Allow-Credentials: true"); // add this header
    //ini_set('session.cookie_httponly', 1 );
    ini_set('session.cookie_samesite',"None");

    ini_set('session.cookie_secure',true);
    session_set_cookie_params(36000);
    session_start();
    if(!isset($_SESSION["acc_lvl"])) {
        $_SESSION["count"] = 0;
        $_SESSION["uid"] = null;
        $_SESSION["name"] = null;
        $_SESSION["lastname"] = null; 
        $_SESSION["acc_lvl"] = 0;
    }
    $_SESSION["count"]++;
?>