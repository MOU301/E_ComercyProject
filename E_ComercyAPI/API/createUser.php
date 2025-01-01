<?php 
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers:*');
include_once '../../E_ComercyAPI/moduls/product.php';
$user=new product();
$data=json_decode(file_get_contents("php://input"));
$user->values['name']=$data->name;
$user->values['email']=$data->email;
$user->values['password']=password_hash($data->password,PASSWORD_DEFAULT);
if($user->addUser($user->values)){
    echo json_encode(array('message'=>'create account success'));
}
else{
    echo json_encode(array('message'=>'create account no success  '));
}
?>