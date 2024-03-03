const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//middleware
app.use(express.json());
app.use(morgan('tiny'));

//routes
const productRouter = require('./routers/products');
const categoryRouter = require('./routers/category');
const userRouter = require('./routers/user');
const orderRouter = require('./routers/order');

const api = process.env.API_URL;

app.use(api+'/products', productRouter);
app.use(api+'/category', categoryRouter);
app.use(api+'/users', userRouter);
app.use(api+'/orders', orderRouter);

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
