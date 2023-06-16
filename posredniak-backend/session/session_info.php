<?php
    include_once(__DIR__."/session.php");
    $session_info = array("uid" => $_SESSION["uid"],"name" => $_SESSION["name"],"lastname" => $_SESSION["lastname"],"acc_lvl" => $_SESSION["acc_lvl"]);
    header('Content-type: application/json');
    echo json_encode($session_info);
?>