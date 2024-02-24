const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const api = '/api/v1';
dotenv.config();

//middleware
app.use(express.json());
app.use(morgan('tiny'));

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);

app.get(api+'/products', async (req, res) =>{
    const productlist = await Product.find();
    res.send(productlist);
});

app.post(api+'/products', (req, res) =>{
    app.use(express.json());
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })

    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
});

mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'Coffeeshop_database'
    })
.then(() => {
    console.log('Database connection is ready...');
})
.catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} or http://localhost:${port}`);
});
