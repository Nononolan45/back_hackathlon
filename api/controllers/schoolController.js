const School = require('../models/schoolModel');
const routeProvider = require('../providers/route');

exports.list_all_schools = (req, res) => {
    School.find({}, (error, schools) => {
        if (error) {
            routeProvider.generateError(500, 'Erreur serveur', res);
        }
        else {
            routeProvider.generateSuccess(200, schools, res);
        }
    });
}

exports.create_a_school = (req, res) => {
    console.log(req.body)

    let new_school = new School(req.body);
    new_school.save((error, school) => {
        if (error) {
            routeProvider.generateError(500, 'Erreur serveur', res);
        }
        else {
            routeProvider.generateSuccess(201, school, res);
        }
    });
}

exports.get_a_school = (req, res) => {
    School.findById(req.params.school_id, (error, school) => {
        if (error) {
            routeProvider.generateError(500, 'Erreur serveur', res);
        }
        else {
            routeProvider.generateSuccess(200, school, res);
        }
    });
}

exports.update_a_school = (req, res) => {
    School.findByIdAndUpdate(req.params.school_id, req.body, { new: true, useFindAndModify: false }, (error, school) => {
        if (error) {
            routeProvider.generateError(500, 'Erreur serveur', res);
        }
        else {
            routeProvider.generateSuccess(200, school, res);
        }
    });
}

exports.delete_a_school = (req, res) => {
    School.findByIdAndRemove(req.params.school_id, (error) => {
        if (error) {
            routeProvider.generateError(500, 'Erreur serveur', res);
        }
        else {
            routeProvider.generateSuccess(200, 'Ecole supprimé', res);
        }
    })
}