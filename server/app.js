const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('hello express');
})

app.use('/api/products', require('./routes/products'));
app.use('/api/sales', require('./routes/sales'));
app.use('/api/customers', require('./routes/customers'));

module.exports = app;