const express = require('express'); //importação do express
const app = express(); //ó o express fungando 
app.set('view-engine', 'ejs'); 
app.set('views', './app/views'); 

module.exports=app; //exportandoapp