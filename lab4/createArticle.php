<?php
$page = "createArticle";
include_once "connection.php";
if (isset($_POST['title']) && isset($_POST['body'])) {
    $conn = mysqli_connect($host, $user, $password, $db) or die("Ошибка " . mysqli_error($conn));
    $query = "INSERT INTO article (title, body) VALUES ('".$_POST['title']."', '".$_POST['body']."')";
    $result = mysqli_query($conn, $query) or die("Ошибка " . mysqli_error($conn));
    header('Location: ../admin.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Редактирование статей</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <?php include ("menuAdmin.php");?>
        </div>
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <form action="/createArticle.php" method="post">
                  <div class="form-group">
                    <label for="articleTitle">Название статьи</label>
                    <input type="text" class="form-control" id="articleTitle" name="title">
                  </div>
                  <div class="form-group">
                    <label for="articleBody">Содержание</label>
                    <textarea class="form-control" id="articleBody" rows="3" name="body"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Создать статью</button>
                </form>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
</body>
</html>