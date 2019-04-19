<?php include_once "connection.php";?>
<?php include_once "snippets.php";?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Новостной портал</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <?php include ("menu.php");?>
        </div>
        <?php
            $conn = mysqli_connect($host, $user, $password, $db) or die("Ошибка " . mysqli_error($conn)); 
            $query = "SELECT * FROM article";
             
            $result = mysqli_query($conn, $query) or die("Ошибка " . mysqli_error($conn)); 
            if ($result) {
                $len = mysqli_num_rows($result);
                $i = 0;
                printStartArticles();
                while ($row = mysqli_fetch_assoc($result)) {
                    printArticle($row['title'], $row['body']);
                    if (($i % 2) == 1) {
                        printDeviderForPair();
                    }
                    $i++;
                }
                printEndArticles();
                mysqli_free_result($result);
            }
             
            mysqli_close($conn);
        ?>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
</body>
</html>