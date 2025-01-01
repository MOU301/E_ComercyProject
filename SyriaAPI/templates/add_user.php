<?php include '../inc/header.php';
if(isset($_SESSION['is_login'])) :
?>
<section class="bg-dark text-white">
    <div class="container">
        <div class="mid">
            <form action="add_user.php" method="post">
                <div class="mb-3 ">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name="name"  class="form-control" id="name" >
                </div>
                <div class="mb-3">
                    <label for="country" class="form-label">Country</label>
                    <input type="text" name="country" class="form-control" id="country">
                </div>

                <input type="submit" name="add_user" class="btn btn-success" value="add user"/>
            </form>
        </div>
    </div>
</section>
<?php else: ?>
    <h1>login in please  <a class="btn btn-danger mx-5" href="login.php">login</a></h1>
    <?php endif; ?>
<?php include '../inc/footer.php' ?>