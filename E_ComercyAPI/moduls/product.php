<?php
require_once '../config/database.php';

class product{
    private $conn;
    // private $table='posts';
   public $values=[];
  
    public function __construct(){
        $this->conn=new database();
       
    }
    
    public function readPruducts(){

        $q="SELECT * FROM  product";
       $this->conn->query($q);
       return $this->conn->ResultSet();
    }
    //,`product`.`category`,`product`.`title`,`product`.`type`,`product`.`image1`,`orders`.`created_at` 

    
    public function readOrder($values){
        $q="SELECT orderitem.*,`product`.`category`,`product`.`title`,`product`.`type`,`product`.`image1` 
            FROM  `orderitem`
            INNER JOIN `product`
            ON `orderitem`.`product_id`=`product`.`id`
            WHERE `orderitem`.`user_id`=:user_id";
       $this->conn->query($q);
      $this->conn->bind(':user_id',$values['user_id']);
       return $this->conn->ResultSet();
    }
public function readOrders(){
    $q="SELECT * FROM  `orders`";
       $this->conn->query($q);
       return $this->conn->ResultSet();
}


public function readAddress($values){
    $q="SELECT * FROM `address` WHERE user_id=:user_id";
    $this->conn->query($q);
    $this->conn->bind(':user_id',$values['user_id']);
    return $this->conn->Single();
}
public function addAddress($values){
    $q="INSERT INTO `address` 
    (user_id,first_name,last_name,city,zipcode,country,phone)
    VALUES
    (:user_id,:first_name,:last_name,:city,:zipcode,:country,:phone)";
    $this->conn->query($q);
    $this->conn->bind(":user_id",$values['user_id']);
    $this->conn->bind(':first_name',$values['first_name']);
    $this->conn->bind(":last_name",$values['last_name']);

    $this->conn->bind(":city",$values['city']);
    $this->conn->bind(':zipcode',$values['zipcode']);
    $this->conn->bind(":country",$values['country']);
    $this->conn->bind(":phone",$values['phone']);
    if($this->conn->execute()){
        return true ;
    }
    else{
        return false;
    }
}
  
    public function CountRowProduct(){
        $q="SELECT * FROM  product";
        $this->conn->query($q);
        return $this->conn->CountRow();
    }
    public function CountRowOrder(){
        $q="SELECT * FROM  orders";
        $this->conn->query($q);
        return $this->conn->CountRow(); 
    }
   public function CountRowOrderById($values){
    $q="SELECT * FROM  orderitem WHERE user_id=:id";
    $this->conn->query($q);
    $this->conn->bind(":id",$values['user_id']);
    return $this->conn->CountRow(); 
   }
   public function addProduct($values){
    $q="INSERT INTO product 
    (sizes,image1,image2,image3,image4,bests,title,description,price,category,type) 
    VAlUES 
    (:sizes,:image1,:image2,:image3,:image4,:bests,:title,:description,:price,:category,:type)";
    $this->conn->query($q);
    $this->conn->bind(':bests',$values['bests']);
    $this->conn->bind(':price',$values['price']);
    $this->conn->bind(':title',$values['title']);
    $this->conn->bind(':description',$values['description']);
    $this->conn->bind(':category',$values['category']);
    $this->conn->bind(':type',$values['type']);
    $this->conn->bind(':sizes',$values['sizes']);
    $this->conn->bind(':image1',$values['image1']);
    $this->conn->bind(':image2',$values['image2']);
    $this->conn->bind(':image3',$values['image3']);
    $this->conn->bind(':image4',$values['image4']);

    if($this->conn->execute()){
        return true;
    }
    else{
        return false;
    }
   }
   public function addOrderItem($values){
    $q="INSERT INTO orderitem 
    (user_id,product_id,size) 
    VAlUES 
    (:user_id,:product_id,:size)";
    $this->conn->query($q);
    $this->conn->bind(":product_id",$values["product_id"]);
    $this->conn->bind(':user_id',$values['user_id']);
    $this->conn->bind(":size",$values['size']);
    if($this->conn->execute()){
        return true;
    }
    else{
        return false;
    }
   }
   public function addOrder($values){
    $q="INSERT INTO orders 
    (user_id,payment,price_total,state) 
    VAlUES 
    (:user_id,:payment,:price_total,:state)";
    $this->conn->query($q);
    $this->conn->bind(":user_id",$values['user_id']);
    $this->conn->bind(':payment',$values['payment']);
    $this->conn->bind(":price_total",$values['totalPrice']);
    $this->conn->bind(":state",$values['state']);
    if($this->conn->execute()){
        return true;
    }
    else{
        return false;
    }
    }
   public function addUser($values){
    $q="INSERT INTO user
    (name,email,password) 
    VALUES 
    (:name,:email,:password) ";
    $this->conn->query($q);
    $this->conn->bind(":name",$values['name']);
    $this->conn->bind(":email",$values['email']);
    $this->conn->bind(':password',$values['password']);
    if($this->conn->execute()){
        return true;
    }
    else{
        return false;
    }
}
public function getUser($email){
    $q='SELECT * FROM user WHERE  email=:email';
    $this->conn->query($q);
    $this->conn->bind(":email",$email);
    return $this->conn->Single();
}
    public function deleteProduct($id){
       $q="DELETE FROM product WHERE id=:id";
       $this->conn->query($q);
       $this->conn->bind(":id",$id);
       if($this->conn->execute()){
        return true;
       }
       else {
        return false;
       }
} 
}
        // $q="SELECT c.name as category_name
        //  p.id,
        //  p.category_id,
        //  p.title,
        //  p.body,
        //  p.author,
        //  p.created_at 
        //  FROM 
        //  ". $this->table ."  p
        //  LEFT JOIN  
        //  categories c as p.category_id=c.id
        // ORDER BY 
        // p.created_at DESC
        // ";
//    public function ReadById($id){
//     $q="SELECT * FROM  posts WHERE id=:id";
//     $this->conn->query($q);
//     $this->conn->bind(':id',$id);
//     return $this->conn->Single();
//    }
//    public function update(){
//     $q="UPDATE posts SET 
//     title=:title,
//     body=:body,
//     author=:author,
//     category_id=:category_id
//     WHERE id=:id";
//     $this->conn->query($q);
//     $this->conn->bind(':title',$this->title);
//     $this->conn->bind(':body',$this->body);
//     $this->conn->bind(':author',$this->author);
//     $this->conn->bind(":category_id",$this->category_id);
//     $this->conn->bind(":id",$this->id);
  
//    if($this->conn->execute()){
//     return true;
//    }
//    else{
//     return false;
//    }
//     }
?>