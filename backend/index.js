import express from 'express';
import cors from 'cors';
import { selectSql } from './database.js'; // Import the startsql function
  // Import the CORS package
const imagepath="https://image.rujenm.com.np/"
const app = express();
const PORT = 3000;
// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get(`/api/product/view/`, async (req, res) => {
  try {
    const userId = req.query.id;
    console.log('userId:', userId);
    const users = await selectSql(`SELECT * FROM products WHERE product_id = '${userId}'`);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data', details: err.message });
  }
});

app.get('/api/product/bir', (req, res) => {
  res.json([{ 
    img: imagepath+"test.jpg",
    name: 'Bird', price: 1000, 
    description:"description place holder"
  }
  ])});
app.get('/api/product/bird', async (req, res) => {
  try {
    const users = await selectSql(`SELECT * FROM products`);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data', details: err.message });
  }
});
