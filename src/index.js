require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, *");
    //app.use(cors());
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


require('./controllers/authControllers')(app);
require('./controllers/projectControllers')(app);
app.listen(process.env.PORT || 9000);