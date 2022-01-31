// 1. importaciones
const express = require('express');
const router = express.Router()

// 2. ruteo
router.get('/',(req,res)=>{

    res.send ('Hola mundo')
})

// 3. exportaciones
module.exports=router;