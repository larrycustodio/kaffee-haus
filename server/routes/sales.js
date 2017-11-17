const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('sales page');
})

module.exports = router;