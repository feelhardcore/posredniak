<?php 

    $allowed_methods = [
        "POST",
    ];
    include __DIR__."/../scripts/scripts.php";
    include __DIR__."/../session/session.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    include __DIR__."/../data_sanitize/sanitize.php";
    include __DIR__."/../database/connect.php";
    

    if(!$_SESSION['uid']){
        ErrorMsg("Nie jesteś zalogowany/na",401);
    }

    $data_raw = $_POST["content"];

    $pid = $_POST["pid"];

    $data = json_decode( $data_raw, true);


    if(!$data){
        ErrorMsg("Niepoprawny format danych");
    }

    $valid = $data["config"]["valid"];
    $hidden =  $data["config"]["hidden"];
    $title = $data["title"];

    $sql = "UPDATE posts SET title = ?, end_date = ?, content = ?, hidden = ? where post_id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssii", $title,$valid,$data_raw,$hidden,$pid);
    $stmt->execute();
    

?>