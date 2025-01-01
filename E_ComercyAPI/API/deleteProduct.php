<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");
include_once '../../E_ComercyAPI/moduls/product.php';
$product=new product();
$data=json_decode(file_get_contents("php://input"));

if($product->deleteProduct($data->id)){
    echo json_encode(array("message"=>true));
}else{
    echo json_encode(array("message"=>false));
}










?>