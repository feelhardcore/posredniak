<?php 

    $allowed_methods = [
        "POST", "GET"
    ];

    include __DIR__."/../session/session.php";
    include __DIR__."/../scripts/scripts.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    include __DIR__."/../data_sanitize/sanitize.php";
    include __DIR__."/../database/connect.php";


    if(!isset($_SESSION['uid'])){
        ErrorMsg("Nie jesteś zalogowany/na");
    }
   
    $uid = $_SESSION['uid'];
    $sql = "SELECT * from users where USER_ID = $uid";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $userInfo = array(
        'name' => $row['NAME'],
        'lastname' => $row['LASTNAME'],
        'phone' => $row['PHONE'],
        'email' => $row['EMAIL'],
        'joined' => $row['JOINED']
    );

    SendJSON($userInfo);

?>