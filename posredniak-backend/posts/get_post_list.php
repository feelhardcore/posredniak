<?php 

    $allowed_methods = [
        "GET",
    ];
    include __DIR__."/../scripts/scripts.php";
    include __DIR__."/../session/session.php";
    include __DIR__."/../requestmethods/allowed_methods.php";
    include __DIR__."/../data_sanitize/sanitize.php";
    include __DIR__."/../database/connect.php";
    
    $uid = $_SESSION["uid"];

    $sql = "SELECT users.NAME, users.LASTNAME, users.USER_ID, posts.title, posts.added, posts.hidden, posts.post_id, posts.end_date from users inner JOIN posts on users.USER_ID = posts.user_id where posts.hidden = 0 OR (users.USER_ID = ? && posts.hidden = 1);";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i',$uid);
    $stmt->execute();
    $result = $stmt->get_result();
    $offers = [];
    while($row = $result->fetch_assoc()){
        array_push($offers,array(
            "title" => $row['title'],
            "name" => $row['NAME'],
            "pid" => $row["post_id"],
            "lastname" => $row["LASTNAME"],
            "added" => $row["added"],
            "hidden" => $row["hidden"],
            "valid" => $row["end_date"],
            "uid" => $row["USER_ID"]
        ));
    }

    SendJSON($offers);



    

?>