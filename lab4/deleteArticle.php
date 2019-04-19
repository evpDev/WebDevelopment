<?php
include_once "connection.php";
if (isset($_GET['id'])) {
    $conn = mysqli_connect($host, $user, $password, $db) or die("Ошибка " . mysqli_error($conn)); 
    $query = "DELETE FROM article WHERE id = '".$_GET['id']."'";
    $result = mysqli_query($conn, $query) or die("Ошибка " . mysqli_error($conn)); 
    mysqli_close($conn);
    header('Location: ../admin.php');
    exit();
}
?>