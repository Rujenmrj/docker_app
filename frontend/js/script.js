async function fetchData() {
  try {
    const response = await fetch('https://backend.rujenm.com.np/api/product/bird');
    const data = await response.json();
    console.log('Product fetched:', data);
    const productDisplay = document.getElementById('loaddata');
    productDisplay.classList.add("active");
    let i=0;
    data.forEach(element => {
      i++;
      div=document.createElement('div');
      div.setAttribute('class',"card");
      div.setAttribute('id',`card${i}`);
      div.setAttribute('onclick',`fetchViewProduct('${element['product_id']}')`);
      div.innerHTML=`<div class="img-card"><img src="https://image.rujenm.com.np/${element['product_id']}.png" alt="product image"></div>
      <div class="card-body">
      <h3>${element['product_name']}</h3>
      <p>Price: ${element['price']}</p>
      <p>${element['description']}</p>
      </div>`
      productDisplay.appendChild(div);
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    document.getElementById('loaddata').innerText = 'Error fetching product.';
  }
  finally{
    const element = document.getElementById("header");
    element.classList.add("animate");
  }
}
async function loading(){
  const element = document.getElementById("header");
  const productView = document.getElementById('loadview');
  const productDisplay = document.getElementById('loaddata');
  element.classList.add("animate-reverse");
  productView.classList.add("active");
  productDisplay.classList.remove("active");
  productDisplay.classList.add("inactive");
}
async function fetchViewProduct(id){
  try {
    await loading();
    console.log(`fetching from https://backend.rujenm.com.np/api/product/view?id=${id}`);
    const response = await fetch(`https://backend.rujenm.com.np/api/product/view?id=${id}`);

    const data = await response.json();
    console.log('viewing product:', data);
    const temp=document.getElementById('loaddata');
    temp.innerHTML='';
        console.log("clear screen");
    data.forEach(element => {
      productBox=document.createElement('main');
      console.log("created element");
        productBox.classList.add('product-box');
        console.log("added class");
        productBox.innerHTML=`<section class="img-sec">
            <div class="main-image"><img src="https://image.rujenm.com.np/${element['product_id']}.png" alt=""></div>
            <div class="alternate">
                <img src="https://image.rujenm.com.np/${element['product_id']}.png" alt="not here">
                <img src="https://image.rujenm.com.np/${element['product_id']}.png" alt="not here">
                <img src="https://image.rujenm.com.np/${element['product_id']}.png" alt="not here">
            </div>
        </section>
        <section class="detail-sec">
            <span>${element['product_name']}</span><span>${element['price']}</span>
            <div class="btn-container">
                <button>buy now</button><button>add to cart</button>
            </div>
        </section>`
        console.log("added inner html");
      // productDisplay.appendChild(div);
      temp.appendChild(productBox);
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    document.getElementById('loaddata').innerText = 'Error fetching product.';
  }
  finally{
    const element = document.getElementById("header");
    element.classList.remove("animate-reverse");
    element.classList.remove("animate");
    setTimeout(element.classList.add("animate"), 2000);
  }
}