const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers');

//para usar el puerto que me ofrece el servidor, o el puerto 3000 (en local);
const port = process.env.PORT || 3000;



app.use((express.static(__dirname + '/public')));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'joRGe DiAz'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.get('/data', (req, res) => {
    res.send('Hello data')


});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});