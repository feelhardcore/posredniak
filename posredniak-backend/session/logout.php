<?php 

    $allowed_methods = [
        "POST",
    ];

    include_once __DIR__."/../session/session.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    $_SESSION["count"] = 0;
    $_SESSION["uid"] = null;
    $_SESSION["name"] = null;
    $_SESSION["lastname"] = null; 
    $_SESSION["acc_lvl"] = 0;
    session_write_close();
?>