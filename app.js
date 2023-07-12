const path = require("path");
const express = require ('express');
const app = express();
const PORT = 3002;

// //middelware o capa que controla el acceso a los archivos publicos
// app.use(express.static('public'));

//cargar el modulo
const mainRouter = require('./src/routes/mainRouter');
//usar el modulo cargado
app.use("/", mainRouter);

app.get("/saluda",(req, res)=>{
    res.send("hola, el orden importa ");
});

app.get("/contacto",(req, res)=>{
    res.sendFile(path.join(__dirname +'/contacto.html'));
});
app.get("/admin",(req, res)=>{
   // res.send(__dirname + "/public/admin.html");
    // res.sendFile(path.join(__dirname + '/public/admin.html'));
    res.send(__dirname + './admin.html')
 }); //como mostrar en la web las paginas que hay en public a través de una ruta


app.listen (PORT, ()=>console.log(`Servidor en http://localhost:${PORT}`));
