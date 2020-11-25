const express = require('express');
const server = express();


const hostname = '0.0.0.0';
const PORT = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/hackathlon');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());


const memberRoute = require('./routes/memberRoute');
memberRoute(server);

const schoolRoute = require('./routes/schoolRoute');
schoolRoute(server); 

const projectRoute = require('./routes/projectRoute');
projectRoute(server);

const userRoute = require('./routes/userRoute');
userRoute(server);

server.listen(PORT, hostname);