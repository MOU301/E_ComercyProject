<?php 
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers:*');
include_once '../../E_ComercyAPI/moduls/product.php';
$user=new product();
$data=json_decode(file_get_contents("php://input"));
$email=$data->email;
$password=$data->password;
$result=$user->getUser($email);
if($result>0){
if(password_verify($password,$result['password'])){
    echo json_encode(array('state'=>true,'message'=>'login in success','user'=>$result));
}
else{
    echo json_encode(array('state'=>false,'message'=>'password is wrong'));
}}else{
    echo json_encode(array('state'=>false,'message'=>'email is wrong'));
}
?>