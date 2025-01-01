<?php
 unset($_SESSION["is_login"]);
 unset($_SESSION["name"]);
 header("location:login.php");
?>