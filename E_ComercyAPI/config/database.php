<?php 
class database {
    private $host ="localhost";
    private $db_name='e_comercy';
    private $user='root';
    private $password='';
    private $stmt;
    private $conn; 
    public function __construct()
    { 
        $dsn="mysql:host=".$this->host.";dbname=".$this->db_name;
        try{
     $this->conn=new PDO($dsn,$this->user,$this->password);
     $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e){
            echo 'Connection Erorr : '.$e->getMessage();
        }
    }
    public function query($q){
      $this->stmt= $this->conn->prepare($q);
    }
    public function bind($param,$value,$type=null){
     if(is_null($type)){
      switch(true){
        case is_null($value):
          $type=PDO::PARAM_NULL;
          break;
        case is_bool($value):
          $type=PDO::PARAM_BOOL;
          break;
        case is_int($value) :
          $type=PDO::PARAM_INT;
          break;
        default : 
        $type=PDO::PARAM_STR;
      }

     }
     return $this->stmt->bindValue($param,$value,$type);
    }
    public function execute(){
      return $this->stmt->execute();
    }
    public function CountRow(){
      $this->execute();
      return $this->stmt->rowCount();
     }
     public function ResultSet(){
      $this->execute();
      return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
     }
     public function Single(){
      $this->execute();
      return $this->stmt->fetch(PDO::FETCH_ASSOC);
     }

}
?>