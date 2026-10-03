import express from 'express';
const app = express(); //Cargamas la varible de los endopints
const PORT =3000;
app.get('/',(req,res) =>{   //funcion de flecha
res.send(`
    <h1>Mi primera respuesta con Node.js y Docker</h1>
    <p>Mi aplicacion bonita </p>
    <img>
        `)
})
app.listen(PORT,'0.0.0.0', () =>{
    console.log(`Servidor ejecutandose en el servidor ${PORT}`);
})
