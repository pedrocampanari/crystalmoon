const Product = require('./schemas');
const express = require('express');
const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find().exec();
        res.json(products);
        console.log(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

router.post('/addNewProduct', async (req, res)=>{
    try {
        const product = new Product(req.body);
        product.changed = new Date ();
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Error adding new product' });
    }
})

module.exports = router;

