
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="inc/style/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <title>Document</title>
</head>
<body>
<div class="bg-success h">
      <ul>
        <li>
          <a  href="add_user.php">add user</a>
        </li>
        <li>
          <a href="add_admin.php">add admin</a>
        </li> 
        <li>
        <a class=" btn btn-dark text-white" href="logout.php">logout</a>
        </li>
      </ul>
    </div>
    <?php echo DisplayMessage()?>