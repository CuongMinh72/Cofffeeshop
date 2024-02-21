const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

require('dotenv/config');

const api = process.env.API_URL;

app.get(api+'/products', (req, res) =>{
    const product = {
        id: 1,
        name: 'Coffee',
        image: 'some_image',
    };
    res.send(product);
});

app.post(api+'/products', (req, res) =>{
    app.use(express.json());
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} or http://localhost:${port}`);
});
