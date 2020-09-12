const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const apiRouter = require('./routes/api');

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) ;

app.use('/api', apiRouter );

// routes
// app.get('/', (req, res) => {
//     res.send('Bien venido')
// });
// app.get('/api', (req, res) => {
//     require('./cambiodb') ;
//     res.send('Esta es la respuesta en la nueva api')
// });
//app.use('/api/notes', require('./routes/notes'));
//app.use('/api/users', require('./routes/users'));

module.exports = app;