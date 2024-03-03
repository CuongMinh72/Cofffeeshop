const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const api = '/api/v1';
dotenv.config();
const productRouter = require('./routers/products');

//middleware
app.use(express.json());
app.use(morgan('tiny'));

//routes
app.use(api+'/products', productRouter);

//database
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
