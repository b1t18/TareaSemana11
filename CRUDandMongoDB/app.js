const express = require('express');
const app = express();

const db= require('./db');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
const alumnos=require('./routes/alumnos');
app.use(alumnos);

const aulas = require('./routes/aulas');
app.use(aulas);

const notas = require('./routes/nota');
app.use(notas);

const cursos = require('./routes/curso');
app.use(cursos);


app.listen(5000, ()=>
{
    console.log('Puerto del servidor es el http://localhost:5000');
});
