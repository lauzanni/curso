const express = require("express");
const router = express.Router();

//archivos estaticos
router.use('/static',express.static('public'));

//routes principales del sitio
router.get("/public",(req,res)=>{
    res.send("hola");
});
router.get("/contacto",(req,res)=>{
    res.send("contacto");
});

module.exports = router;