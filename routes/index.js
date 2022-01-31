// 1. importaciones
const express = require('express');
const router = express.Router()

// 2. ruteo
router.get('/',(req,res)=>{

    res.send ('Hola mundo')
})

router.get('/contacto',(req,res)=>{

    res.send ('Contacto')
})

router.get('/acerca',(req,res)=>{

    res.send (
        <h1>Acerca de mi</h1>
    )
})

// 3. exportaciones
module.exports=router;