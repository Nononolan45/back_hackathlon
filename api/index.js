const express = require('express');
const server = express();

// if .env is empty , define value default for csont
const hostname = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

// connection to mongo
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/hackathlon');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

// management  cors to accept all origin for prod and test
const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
server.use(cors(corsOptions));

// make accessible config swagger 
server.use(express.static('swagger'));

// generate all route 
const memberRoute = require('./routes/memberRoute');
memberRoute(server);

const schoolRoute = require('./routes/schoolRoute');
schoolRoute(server);

const projectRoute = require('./routes/projectRoute');
projectRoute(server);

const userRoute = require('./routes/userRoute');
userRoute(server);

server.listen(PORT, hostname);