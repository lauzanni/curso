const express = require ('express');
const app = express();
const PORT = 3002;

// app.get("/",(req, res)=>{
//     res.send("hola sadas ");
// });

app.use(express.static('public'));

app.listen (PORT, ()=>console.log(`Servidor en http://localhost:${PORT}`));
