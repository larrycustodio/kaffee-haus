const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/kaffee-haus', {useMongoClient:true});
mongoose.Promise = Promise;

app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('hello express');
})

app.use('/api/products', require('./routes/products'));
app.use('/api/sales', require('./routes/sales'));
app.use('/api/customers', require('./routes/customers'));

module.exports = app;