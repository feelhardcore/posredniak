<?php 
include __DIR__."/../session/session.php";
$allowed_methods = ["POST"];

include __DIR__."/../requestmethods/allowed_methods.php";

include __DIR__."/../database/connect.php";


$return = array("exists" => false);

$email = $_POST["email"];
$query = "SELECT * from users where EMAIL=?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s",$email);
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows > 0){
    $return["exists"] = true;
}
$stmt->close();
$conn->close();
header("Content-Type: application/json");
echo json_encode($return)
?>