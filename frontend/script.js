// frontend/script.js

// document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

async function fetchData() {
  console.log('fetching product');
  time=new Date();
  console.log(time);
  try {
    const response = await fetch('https://backend.rujenm.com.np/api/product/bird');
    const data = await response.json();
    console.log('Product fetched:', data);
    const productDisplay = document.getElementById('loaddata2');
    productDisplay.innerHTML = `
      <img src="${data['img']}" alt="product image">
      <h3>${data['name']}</h3>
      <p>Price: ${data['price']}</p>
      <p>${data['description']}</p>
    `;
  } catch (error) {
    console.error('Error fetching product:', error);
    document.getElementById('loaddata').innerText = 'Error fetching product.';
  }
}