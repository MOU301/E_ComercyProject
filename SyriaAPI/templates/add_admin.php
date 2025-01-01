<?php include '../inc/header.php';
if(isset($_SESSION['is_login'])) :
?>

<section class="bg-dark text-white">
    <div class="container">
        <div class="admins">
            <form class="add_admin.php" method="post">
                <div class="mb-3 ">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name="name" class="form-control" id="name">
                </div>
                <div class="mb-3 ">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="password">
                </div>
                <button type="submit" name="add_admin" class="btn btn-success">add admin</button>
            </form>
            <ul >
              <li class="f-flex juctify-content-evenlly">
                name 
                <button  class=" btn btn-danger">delete</button>
            </li>
            </ul>
            
        </div>
        
    </div>
</section>
<?php else: ?>
    <h1>login in please  <a class="btn btn-danger mx-5" href="login.php">login</a></h1>
    <?php endif; ?>
<?php include '../inc/footer.php' ?>