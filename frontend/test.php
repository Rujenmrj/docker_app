<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .productcard{
            width: 80%;
            min-height: 70vh;
            border-radius: 10px;
            overflow: hidden;
            background-color: bisque;
            display: flex;
        }
        .productcard img{
            width: 25%;
            height: 25%;
            object-fit: cover;
            padding: 1%;
        }
        .altimages img{
            width: 5%;
            height: 5%;
            object-fit: cover;
            padding: 1%;
        }
    </style>
</head>
<body>
    <?php
    // include 'header.html';
    ?>
    <div class="productcard">
        <div class="productimages">
            <img src="https://image.rujenm.com.np/placehold.png" alt="image of something">
            <div class="altimages">
                <img src="https://image.rujenm.com.np/placehold.png" alt="image of something">
                <img src="https://image.rujenm.com.np/placehold.png" alt="image of something">
                <img src="https://image.rujenm.com.np/placehold.png" alt="image of something">
            </div>
        </div>
        <div class="productdetail">
            <h2>product name</h2>
            <h3>price</h3>
            <button>buy now</button>
            <button>add to cart</button>
            <iframe src="" frameborder="0"></iframe>
        </div>
    </div>
</body>
</html>