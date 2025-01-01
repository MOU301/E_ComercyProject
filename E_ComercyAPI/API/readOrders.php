<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:GET");
header("Access-Control-Allow-Headers: Content-Type");
include_once '../../E_ComercyAPI/moduls/product.php';
$order=new product();
$result=$order->readOrders();
$num=$order->CountRowOrder();
$arr_orders=array();
$arr_user=array();
foreach($result as $row){
     extract($row);
     $order->values['user_id']=$user_id;
     if(!in_array($user_id,$arr_user)){
      array_push($arr_user,$user_id);
     
      $address=$order->readAddress($order->values);
      extract($address);
       $arr_order=$order->readOrder($order->values);
       $orders=array();
        foreach($arr_order as $item){
          extract($item);
          $arr_orderItem=array(
              "title"=>$title,
              "size"=>$size
          );
          array_push($orders,$arr_orderItem);
        }
       $arr_item=array(
          "id"=>$id,
          "user_id"=>$user_id,
          "price"=>$price_total,
          "method"=>"COD",
          "payment"=>$payment,
          "date"=>$created_at,
          "name"=>$first_name . $last_name,
          "city"=>$city,
          "street"=>$street,
          "zipcode"=>$zipcode,
          "phone"=>$phone,
          "order"=>$orders
          );
          array_push($arr_orders,$arr_item);
     }
     
}
if($num>0){
  // hier ich mochte rechtung by mkdir to save this rechtung 
echo json_encode($arr_orders);
}else{
 return false;
}
?>