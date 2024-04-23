const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const supplierRoutes = require('../app/routes/supplierRoutes');
const productRoutes = require('../app/routes/productRoutes');
const categoryRoutes = require('../app/routes/categoryRoutes');

const app = express();


const corsOptions = {
  origin: 'http://localhost:3000/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions)); 

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server Lu Running Di Port Ini Ya Fak : Port ${PORT} kalau mager klik ini aja ya fak http://localhost:${PORT}`);
});
