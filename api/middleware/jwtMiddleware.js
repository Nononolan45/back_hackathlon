const jwt = require('jsonwebtoken');
const routeProvider = require('../providers/route');

// if JWT_SECRET in.env is empty 
const JWT_SECRET = process.env.JWT_SECRET|| '123456789';


exports.verify_token = (req, res, next) => 
{
    // get token in request
    let token = req.headers['authorization'];

    // check type token
    if(typeof token != 'undefined')
    {   
        // verify token with jsonwebtoken
        jwt.verify(token, JWT_SECRET, (error) => 
        {
            if(error)
            {
                routeProvider.generateError(401, 'Accès interdit', res);
            }
            else
            {
                // authorize to continue
                next();
            }
        });
    }
    else 
    {
        routeProvider.generateError(403, 'Accès interdit', res);
    }
}

