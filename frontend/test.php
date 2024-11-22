<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            display: flex;
            justify-content: center;
        }
        .product-box{
            background-color: bisque;
            display: flex;
            min-height: 70vh;
            max-width: 70%;
            border-radius: 10%;
        }
        .img-sec{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
        }
        .detail-sec{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        .main-image{
            display: flex;
            justify-content: center;
        }
        .main-image img{
            padding: 3%;
            width: 50%;
        }
        .alternate{
            display: flex;
            justify-content: space-evenly;
            width: 50%;
        }
        .alternate img{
            width: 20%;
            aspect-ratio: 1/1;
        }
        .btn-container{
            display: flex;
            justify-content: space-evenly;
            width: 50%;
        }
        .btn-container button{
            padding: 5%;
            border: none;
            border-radius: 5%;
            background-color: rgb(175, 157, 132);
            color:white;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="test"></div>
    <script>
        productBox=document.createElement('main');
        productBox.classList.add('product-box');
        productBox.innerHTML=`<section class="img-sec">
            <div class="main-image"><img src="https://image.rujenm.com.np/placehold.png" alt=""></div>
            <div class="alternate">
                <img src="https://image.rujenm.com.np/placehold.png" alt="not here">
                <img src="https://image.rujenm.com.np/placehold.png" alt="not here">
                <img src="https://image.rujenm.com.np/placehold.png" alt="not here">
            </div>
        </section>
        <section class="detail-sec">
            <span>name of product</span><span>price</span>
            <div class="btn-container">
                <button>buy now</button><button>add to cart</button>
            </div>
        </section>`

        document.getElementById('test').appendChild(productBox);
    </script>
</body>
</html>