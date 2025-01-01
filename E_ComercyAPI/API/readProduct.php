<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
include_once '../../E_ComercyAPI/moduls/product.php';
$product=new product();
$arr_products=array();
$data=$product->readPruducts();
$num=$product->CountRowProduct();
if($num>0){
    foreach($data as $row){
        extract($row);
        $product_item=array(
            "id"=>$id,
            "title"=>$title,
            "description"=>$description,
            "category"=>$category,
            "price"=>$price,
            "bests"=>$bests,
            "type"=>$type,
            "image1"=>$image1,
            "image2"=>$image2,
            "image3"=>$image3,
            "image4"=>$image4,
            "sizes"=>$sizes,
            
        );
        array_push($arr_products,$product_item);
    }

echo json_encode($arr_products);


}

?>