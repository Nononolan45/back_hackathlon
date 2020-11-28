const express = require('express');
const server = express();


const hostname = '0.0.0.0';
const PORT = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/hackathlon');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());


const cors = require('cors');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
server.use(cors(corsOptions));


server.use(express.static('swagger'));

const swaggerUi = require('swagger-ui-express'); 

const optionSwagger = {
  swaggerOptions: { 
    url: process.env.URL_SWAGGER,
    requestInterceptor: function(req) {
      console.log('--------------------------------------------------------------');
      req.headers.Authorization = "Bearer xxxxxxx"
      return req
    }
  }
}
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, optionSwagger),(req,res, next) => {
  console.log(req);
});

swaggerUi


const memberRoute = require('./routes/memberRoute');
memberRoute(server);

const schoolRoute = require('./routes/schoolRoute');
schoolRoute(server); 

const projectRoute = require('./routes/projectRoute');
projectRoute(server);

const userRoute = require('./routes/userRoute');
userRoute(server);

server.listen(PORT, hostname);