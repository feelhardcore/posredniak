<?php 

    error_reporting(0);

    $allowed_methods = [
        "GET",
    ];
    include __DIR__."/../session/session.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    include __DIR__."/../data_sanitize/sanitize.php";
    include __DIR__."/../database/connect.php";

    if(!isset($_GET["c"])){
        echo "bad link";
        exit();
    }

    echo "code : ".$_GET['c']; 

    $data = array("code" => $_GET["c"]);

    $fields= [
        "code" => "string",
    ];

    $data_sanitized = sanitize($data,$fields);

    $sql = "SELECT * from activations where CODE = '".$data_sanitized["code"]."'";
    $result = $conn->query($sql);
    if($row = $result->fetch_assoc()){
        $uid = $row["USER_ID"];
        echo "Activation code for $uid";
        $sql =  "UPDATE users SET STATUS = 2 where USER_ID = $uid";
        $conn->query($sql);
        echo "Aktywowano konto, możesz sie zalogować";
        $sql =  "DELETE from activations where CODE = '".$data_sanitized["code"]."'";
        $conn->query($sql);
    }
    else{
        echo "Link nie istnieje lub nie działa";
    }
?>