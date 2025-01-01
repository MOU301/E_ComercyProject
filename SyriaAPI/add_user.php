<?php include 'core/init.php'; 
$user=new user;
$validater=new validator;
$template=new template("templates/add_user.php");
if(isset($_POST['add_user'])){
    $arr_field=['name','country'];
    if($validater->isRequired($arr_field)){
        $data=[];
        $data['name']=$_POST['name'];
        $data['country']=$_POST['country'];
        if($user->addUser($data)){
            redirect('add_user.php','added the contact in datebase','success');
        
          }
          else{
            redirect('add_user.php','there is error in register in datebase','error');
          }
    }else{
  
        redirect('add_user.php','please fill the field !!','error');
      
      }

   
    
}

   

echo $template;