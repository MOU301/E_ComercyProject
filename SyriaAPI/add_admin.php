<?php include 'core/init.php';
 
$user=new user;
$validater=new validator;
$template=new template("templates/add_admin.php");
if(isset($_POST['add_admin'])){
    $arr_field=['name','password'];
    if($validater->isRequired($arr_field)){
        $data=[];
        $data['name']=$_POST['name'];
        $data['password']=password_hash($_POST["password"],PASSWORD_DEFAULT);;
        if($user->addAdmin($data)){
            redirect('add_user.php','added the contact in datebase','success');
        
          }
          else{
            redirect('add_admin.php','there is error in register in datebase','error');
          }
    }else{
  
        redirect('add_admin.php','please fill the field !!','error');
      
      }

    }

echo $template;