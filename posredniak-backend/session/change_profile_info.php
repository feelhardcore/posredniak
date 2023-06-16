<?php 

    $allowed_methods = [
        "POST"
    ];

    include __DIR__."/../session/session.php";
    include __DIR__."/../scripts/scripts.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    include __DIR__."/../data_sanitize/sanitize.php";
    include __DIR__."/../database/connect.php";

    $data = $_POST;

    if(!isset($_SESSION['uid'])){
        ErrorMsg("Nie jesteś zalogowany/na");
    }

    if($data['name'] == '' || $data['lastName'] == '' || $data['phone' == ''])
    {
        ErrorMsg("Niepoprawne dane");
    }

    $uid = $_SESSION['uid'];

    $sql = "UPDATE users SET PHONE = ?, NAME = ?, LASTNAME = ? where USER_ID = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi",$data['phone'],$data['name'],$data['lastName'],$uid);
    $stmt->execute();



?>