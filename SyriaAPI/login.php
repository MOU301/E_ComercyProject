<?php include 'core/init.php'; 
$user=new user;
$validator=new validator;
$template=new template("templates/login.php");
if(isset($_POST['login'])){
$field_array=['name','password'];
    if($validator->isRequired($field_array)){

        $row=$user->CheckUser($_POST['name']);
        if(!empty($row)){
           if(password_verify($_POST['password'],$row->password)){
               if($user->login($row)){
               redirect("add_user.php","success login welcome with you  :".$_SESSION['name'],'success');
               }
           }else{
              redirect("login.php",'the password is wrong ','error');
           }
          
        }
        else{
            redirect('login.php','the username is wrong ','error');
        }
    }
    else{
        redirect('login.php',"fill the field please",'error');
    }
}

   

echo $template;