<?php 

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[random_int(0, $charactersLength - 1)];
    }
    return $randomString;
}

function ErrorMsg($error,$code = 400){

        http_response_code($code);
        header("Content-Type: application/json");
        echo json_encode(array("error" => "$error"));
        exit();
}

function SendJSON($json){
    header("Content-Type: application/json");
    echo json_encode($json);
}

?>

