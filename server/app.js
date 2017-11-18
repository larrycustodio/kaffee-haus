const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/kaffee-haus', {useMongoClient:true});
mongoose.Promise = Promise;

app.use(express.static('dist'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send(index.html);
})

app.use('/api/products', require('./routes/products'));
app.use('/api/sales', require('./routes/sales'));
app.use('/api/customers', require('./routes/customers'));

module.exports = app;