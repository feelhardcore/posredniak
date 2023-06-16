<?php
    include "./session/session.php";
    $count = $_SESSION["count"];
    $name = './files/2329708.jpg';
    $fp = fopen($name, 'rb');
   // header("Content-Type: image/jpg");
    //header("Content-Length: " . filesize($name));
    //header('Content-Disposition: attachment; filename="filetodownload.jpg"');
    //fpassthru($fp);
?>