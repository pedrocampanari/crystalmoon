const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); 
app.use(express.static('public'));

//Database routes
const productsRoutes = require('./src/database/router_database_products');
app.use(productsRoutes);

//Routes
const adminRoutes = require('./src/routes/adminRoutes');
app.use(adminRoutes);

const MONGODB_CONNECT_URI = 'mongodb+srv://pedrocampanari:yEvXy50qK8b9iqUM@crystalmoon.rmb2g.mongodb.net/?retryWrites=true&w=majority&appName=crystalmoon/'

mongoose.connect(MONGODB_CONNECT_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(process.env.PORT || 443, () => {
      console.log('Server is running on port:', process.env.PORT || 443);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});
