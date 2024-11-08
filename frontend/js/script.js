async function fetchData() {
  console.log('fetching product');
  time=new Date();
  console.log(time);
  try {
    const response = await fetch('https://backend.rujenm.com.np/api/product/bird');
    const data = await response.json();
    console.log('Product fetched:', data);
    const productDisplay = document.getElementById('loaddata');
    let i=0;
    data.forEach(element => {
      i++;
      div=document.createElement('div');
      div.setAttribute('class',"card");
      div.setAttribute('id',`card${i}`);
      div.setAttribute('onclick',"view()");
      div.innerHTML=`<div class="img-card"><img src="${element['img']}" alt="product image"></div>
      <div class="card-body">
      <h3>${element['name']}</h3>
      <p>Price: ${element['price']}</p>
      <p>${element['description']}</p>
      </div>`
      productDisplay.appendChild(div);
    });
   /* productDisplay.innerHTML = `
    <div id=card>
      <img src="${data['img']}" alt="product image">
      <div id="card-body">
      <h3>${data['name']}</h3>
      <p>Price: ${data['price']}</p>
      <p>${data['description']}</p>
      </div>
    </div>
    `;*/
	  // productDisplay.innerHTML=data[0].name;
  } catch (error) {
    console.error('Error fetching product:', error);
    document.getElementById('loaddata').innerText = 'Error fetching product.';
  }
  finally{
    const element = document.getElementById("header");
    element.classList.add("animate");
  }
}
function view(){
  // window.location.href = "product.html";
  console.log('clicked');
}