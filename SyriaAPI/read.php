<?php 
header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');
header('Access-Control-Allow-Method:get');
include 'core/init.php';
$user=new user;
$result=$user->getAllUsers();
$num=$user->CountRow();
if($num > 0) {
$users['data']=array();
echo json_encode($result);
}


?>