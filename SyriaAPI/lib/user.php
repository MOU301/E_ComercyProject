<?php 

class user{
    private $db;
    public function __construct()
    {
      $this->db=new database();  
    }
    public function CountRow(){
      $q="SELECT * FROM person";
      $this->db->query($q);
      return $this->db->CountRow();
  }
    public function getAllUsers(){
        $q='SELECT *
         FROM person ';
        $this->db->query($q);
        return $this->db->resultSet();
    }
    public function CheckUser($name){
      $q="SELECT * FROM admins WHERE name=:name"; 
      $this->db->query($q);
      $this->db->bind(":name",$name);
      return $this->db->single();
   }
   public function login($row){
    $_SESSION['is_login']=true;
    $_SESSION['username']=$row->name;
    $_SESSION['id']=$row->id;
    $id=$_SESSION['id'];
    return true;
}
public function logout($id){
  unset($_SESSION['is_login']);
  unset($_SESSION["username"]);
  unset($_SESSION['id']);
}

    public function addUser($data){
      $q="INSERT INTO `person` ( `name`, `country`) 
      VALUES (:name, :country)";
    $this->db->query($q);
    $this->db->bind(':name',$data['name']);
    $this->db->bind(':country',$data['country']);
    if($this->db->execute()){
    return true;
  }  
  else{
    return false;
  }
  }
  public function addAdmin($data){
    $q="INSERT INTO `admins` ( `name`,`password`) 
    VALUES (:name,:password)";
  $this->db->query($q);
  $this->db->bind(':name',$data['name']);
  $this->db->bind(':password',$data['password']);
  if($this->db->execute()){
  return true;
}  
else{
  return false;
}
}

  public function Delete($id){
    $q="DELETE FROM `admins` WHERE `id` =:id";
    $this->db->query($q);
    $this->db->bind(":id",$id);
    if($this->db->execute()){
      return true;
    }
    else{
      return false; 
    }

  }
   
  
}




?>