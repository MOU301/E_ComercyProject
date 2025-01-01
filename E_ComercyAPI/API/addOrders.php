<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
include_once '../../E_ComercyAPI/moduls/product.php';
$order=new product();
$data=json_decode(file_get_contents("php://input"));

$order->values['user_id']=$data->user_id;
$result=false;
 foreach($data->cartItems as $item){
    var_dump($item->id);
    $order->values['product_id']=$item->id;
    if(is_array($item->size)){
   
        foreach($item->size as $size){
         
            $order->values['size']=$size;//the size hier nicht object nur array 
            //send the data to database to storage 
            echo '<pre>';
            print_r($order->values);
            echo '</pre>';
            if($order->addOrderItem($order->values)){
             $result=true;
            }
            else{
                $result=false;
            }
        
        }
    }
 }
 if($result){
$order->values['payment']=$data->payment;
$order->values['state']='new orders';
$order->values['street']=$data->street;
$order->values['first_name']=$data->firstName;
$order->values['last_name']=$data->lastName;
$order->values['city']=$data->city;
$order->values['zipcode']=$data->Zipcode;
$order->values['country']=$data->country;
$order->values['phone']=$data->phone;
$order->values['totalPrice']=$data->totalPrice;
    echo '<pre>'; 
    print_r($order->values);
    echo '</pre>';
if($order->addOrder($order->values)){
        if($order->addAddress($order->values)){
            return true;
        }
        else{
            return false;
        }
  }else{
  return false;
  }
    
 }


?>