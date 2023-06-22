const express = require ('express');
const app = express();
const PORT = 3002;
//middelware o capa que controla el acceso a los archivos publicos
app.use(express.static('public'));

app.get("/",(req, res)=>{
    res.send("hola, el orden importa ");
});



app.listen (PORT, ()=>console.log(`Servidor en http://localhost:${PORT}`));
