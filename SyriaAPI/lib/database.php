
<?php
class database{
    private $host=DB_host;
    private $user=DB_user;
    private $pass=DB_pass;
    private $dbname=DB_name;
    private $stmt;
    private $dbh;
    private $error;
    public function __construct(){
     $dsn="mysql:host=".$this->host.";dbname=".$this->dbname;
     $option=array(
      PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION
     );
        try{
       $this->dbh=new PDO($dsn,$this->user,$this->pass,$option);
        }
        catch(PDOException $e){
            echo 'there are error in '.$e->getMessage();
        }
    }
    public function query($q){
        $this->stmt=$this->dbh->prepare($q);
    }
    public function bind($param,$value,$type=null){
        if(is_null($type)){
            switch(true){
                 case is_int($value) :
                    $type=PDO::PARAM_INT;
                    break;
                case is_bool($value) :
                    $type=PDO::PARAM_BOOL;
                    break;
                case is_null($value) :
                    $type=PDO::PARAM_NULL;
                    break;
                default :
                $type=PDO::PARAM_STR;
    
            }
        }
        $this->stmt->bindValue($param,$value,$type);
    }
    public function execute(){
        return $this->stmt->execute();
    }
    public function CountRow(){
        $this->execute();
        return $this->stmt->rowCount();
       }
    public function resultSet(){
        $this->execute();
        return $this->stmt->fetchall(PDO::FETCH_OBJ);
    }
    public function single(){
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_OBJ);
    }
}
?>