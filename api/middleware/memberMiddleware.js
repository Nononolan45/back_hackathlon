const routeProvider = require('../providers/route');
const Member = require('../models/memberModel');


exports.verifyNumberByProject = (req, res, next) => {
    // verify when before memebr crate if limit project member < 5
    Member.find(
        {
             project_id: req.params.project_id 
        },
        (error, members) => 
        {
            if (error) 
            {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else if (members.length === 5) {
                routeProvider.generateSuccess(403, 'Projet complet', res);
            }
            next();
        });
}