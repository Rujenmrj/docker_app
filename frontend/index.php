<?php
    $host = 'db';          // MySQL container name in Docker Compose
    $user = 'root';        // MySQL username
    $password = 'SeveN062'; // MySQL password
    $database = 'mydatabase'; // Database name
    // Create connection
    $conn = new mysqli($host, $user, $password, $database);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Market</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="https://image.rujenm.com.np/logo-black.png" type="image/x-icon">
</head>
<body onload="fetchData()">
    <?php
        include 'header.html';
    ?>
        <section id="loaddata"></section>
        <section id="loadview"></section>
    <?php
        include 'footer.html';
    ?>
    <script src="js/script.js"></script>
</body>
</html>