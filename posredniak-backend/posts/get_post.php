<?php 

    $allowed_methods = [
        "GET",
    ];
    include __DIR__."/../scripts/scripts.php";
    include __DIR__."/../session/session.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    include __DIR__."/../data_sanitize/sanitize.php";
    include __DIR__."/../database/connect.php";
    
    $pid = $_GET['id'];
    if(!$pid){
        ErrorMsg("Nieprawidlowy format danych");
    }

    $sql = "SELECT * from posts where post_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i',$pid);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $owner = $_SESSION['uid'] == $row["user_id"] ? true : false;
    if(!$row){

    }

    SendJSON(array(
        "content" => $row["content"],
        "owner" => $owner
    ));



    

?>