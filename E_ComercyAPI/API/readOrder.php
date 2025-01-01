<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:GET");
header("Access-Control-Allow-Headers: Content-Type");
include_once '../../E_ComercyAPI/moduls/product.php';
$order=new product();
$data=json_decode(file_get_contents("php://input"));
$order->values['user_id']=$data->user_id;
$result=$order->readOrder($order->values);
$num=$order->CountRowOrderById($order->values);
if($num>0){
echo json_encode($result);
}else{
 return false;
}






?>