const routeProvider = require('../providers/route');
const jwt = require('jsonwebtoken');
const Project = require('../models/projectModel');


exports.verifyUsserIsAttachedToSchool = (req, res, next) => {
    // verify user is link to project by school_id

    let token = req.headers['authorization'];
    const decoded = jwt.decode(token);

    Project.findById(
        req.params.project_id,
        (error, project) => 
        {
            if (error) 
            {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else if(project) 
                {   
                    if(project.school_id === decoded.school_id)
                    {
                        next();
                    } 
                    else
                    {
                        routeProvider.generateError(500, 'Erreur serveur', res);

                    }
                }
                else 
                {
                    routeProvider.generateError(403, 'Accès interdit', res);

                }
        });
}