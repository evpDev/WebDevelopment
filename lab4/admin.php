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
            <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="images/500x300.png" alt="">
                    <div class="caption">
                        <h4>Thumbnail label</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                        <a href="#" class="btn btn-info btn-md" role="button">Подробнее</a>
                        <a href="#" class="btn btn-danger btn-md" role="button">Удалить статью</a>
                    </div>
                </div> 
            </div>
            <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="images/500x300.png" alt="">
                    <div class="caption">
                        <h4>Thumbnail label</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                        <a href="#" class="btn btn-info btn-md" role="button">Подробнее</a>
                        <a href="#" class="btn btn-danger btn-md" role="button">Удалить статью</a>
                    </div>
                </div> 
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