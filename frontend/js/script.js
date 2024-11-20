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
      div.setAttribute('onclick',`fetchViewProduct('bir')`);
      div.innerHTML=`<div class="img-card"><img src="${element['img']}" alt="product image"></div>
      <div class="card-body">
      <h3>${element['name']}</h3>
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
    const response = await fetch(`https://backend.rujenm.com.np/api/product/${id}`);
    const data = await response.json();
    console.log('Product fetched:', data);
    const productDisplay = document.getElementById('loadview');
    let i=0;
    data.forEach(element => {
      i++;
      div=document.createElement('div');
      div.setAttribute('class',"card");
      div.setAttribute('id',`card${i}`);
      div.innerHTML=`<div class="img-card"><img src="${element['img']}" alt="product image"></div>
      <div class="card-body">
      <h3>${element['name']}</h3>
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
    element.classList.remove("animate-reverse");
    element.classList.remove("animate");
    setTimeout(element.classList.add("animate"), 2000);
  }
}