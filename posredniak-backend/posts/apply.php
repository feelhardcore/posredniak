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

    $path = __DIR__."/../files/";

    $pid = $_POST["pid"];

    $files = $_FILES;

    $uid = $_SESSION['uid'];

    $cv = $files["cv"];
    $letter = $files["letter"];

    $cv_name  = $cv ? generateRandomString(30).".pdf" : null;
    $letter_name = $letter ? generateRandomString(30).".pdf" : null;

    if($cv)move_uploaded_file($files["cv"]['tmp_name'],$path.$cv_name);
    if($letter)move_uploaded_file($files["letter"]['tmp_name'],$path.$letter_name);

    $sql = "INSERT into applications VALUES(?,?,?,?,0)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iiss", $pid, $uid, $cv_name, $letter_name);
    $stmt->execute();
    $sql = "UPDATE posts SET title = ?, end_date = ?, content = ?, hidden = ? where post_id = ?";

    
    
    

?>