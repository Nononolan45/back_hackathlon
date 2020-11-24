const express = require('express');
const server = express();


const hostname = '0.0.0.0';
const PORT = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinodejs');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());


const postRoute = require('./routes/postRoute');
postRoute(server);

const commentRoute = require('./routes/commentRoute');
commentRoute(server);

const userRoute = require('./routes/userRoute');
userRoute(server);

server.listen(PORT, hostname);