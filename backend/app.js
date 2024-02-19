const express = require('express');
const app = express();
const port = 3000;

require('dotenv/config');

app.get('/', (req, res) => {
    res.send('Welcome to the Coffee Shop!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} or http://localhost:${port}`);
});
