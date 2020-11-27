const jwt = require('jsonwebtoken');
const routeProvider = require('../providers/route');


const JWT_SECRET = process.env.JWT_SECRET;


exports.verify_token = (req, res, next) => {
    let token = req.headers['authorization'];

    if(typeof token != 'undefined'){
        jwt.verify(token, JWT_SECRET, (error) => {
            if(error){
                routeProvider.generateError(403, 'Accès interdit', res);
            }else{
                next();
            }
        });
    }
    else {
        routeProvider.generateError(403, 'Accès interdit', res);
    }
}

exports.addNameToContent = (req, res, next) => {
    let token = req.headers['authorization'];
    let decodeToken = jwt.decode(token);
    req.body.name = decodeToken.name;
    next();
}