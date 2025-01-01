<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
include_once '../../E_ComercyAPI/moduls/product.php';
$product=new product();
$product->values['title']=$_POST['title'];
$product->values['description']=$_POST['description'];
$product->values['price']=$_POST['price'];
$product->values['category']=$_POST['category'];
$product->values['type']=$_POST['type'];
$product->values['bests']=$_POST['bests'];
$product->values['sizes']=$_POST['sizes'];

//start add
 //chat gpt
 $images=[null,null,null,null];
 $i=0;
 foreach ($_FILES as $fieldName => $fileData) {
    $ImageName=strtolower(explode(".",$fileData['name'])[0]);
    $ImageEx=strtolower(explode(".",$fileData['name'])[1]);
    $arrEx=["jpg","jpeg","png"];
    $ImageSize=$fileData['size'];
    $Imagetmp=$fileData['tmp_name'];
    if(in_array($ImageEx,$arrEx)){
        $NameStorage=uniqid();
        $NameStorage.=".".$ImageEx;
        if(move_uploaded_file($Imagetmp,"images/".$NameStorage)){
       $images[$i]="images/".$NameStorage;
       $i++;
       
        
         
     }
   }
 }
//chat gpt
$product->values['image1']=$images[0]!=null ? $images[0] : '';
$product->values['image2']=$images[1]!=null ? $images[1] : '';
$product->values['image3']=$images[2]!=null ? $images[2] : '';
$product->values['image4']=$images[3]!=null ? $images[3] : '';


//end add images 
if($product->addProduct($product->values)){
    echo json_encode(array("state"=>true,'message'=>'add product success'));
}
else{
    echo json_encode(array("state"=>false,'message'=>'add not product retry'));
}
?>