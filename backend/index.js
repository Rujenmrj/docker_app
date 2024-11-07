const express = require('express');
const cors = require('cors');  // Import the CORS package
const imagepath="https://image.rujenm.com.np/"
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Here is some data', data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
});

app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/api/product/bird', (req, res) => {
  res.json([{ 
    img: imagepath+"test.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { img: imagepath+"logo1.jpg",
    name: 'Bird', 
    price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { img: imagepath+"logo1.jpg",
    name: 'Bird', 
    price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  },
  { 
    img: imagepath+"logo1.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  }]);
});
