<?php include '../inc/header.php' ?>
<section class="bg-dark text-white">
    <div class="container">
        <div class="mid">
            <form class="login.php" method="post">
                <div class="mb-3 ">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name="name" class="form-control" id="name" >
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="password">
                </div>

                <button type="submit" name="login" class="btn btn-success">Login</button>
            </form>
        </div>
    </div>
</section>
<?php include '../inc/footer.php' ?>