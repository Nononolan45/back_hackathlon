const Member = require('../models/memberModel');
const Project = require('../models/projectModel');

const routeProvider = require('../providers/route');


exports.list_all_members = (req, res) => {
    Member.find(
        { project_id: req.params.project_id },
        (error, members) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                routeProvider.generateSuccess(200, members, res);
            }
        });
}

exports.create_a_member = (req, res) => {
    Project.findById(
        req.params.project_id,
        (error) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                let new_member = new Member(
                    {
                        project_id: req.params.project_id,
                        ...req.body
                    });
                new_member.save(
                    (error, member) => {
                        if (error) {
                            routeProvider.generateError(500, 'Erreur serveur', res);
                        }
                        else {
                            routeProvider.generateSuccess(201, member, res);
                        }
                    });
            }
        });


}

exports.get_a_member = (req, res) => {


    Member.findById(
        req.params.member_id,
        (error, member) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                routeProvider.generateSuccess(200, member, res);
            }
        });
}

exports.update_a_member = (req, res) => {
    Member.findByIdAndUpdate(
        req.params.member_id,
        req.body,
        {
            new: true,
            useFindAndModify: false
        },
        (error, member) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                routeProvider.generateSuccess(200, member, res);
            }
        });
}

exports.delete_a_member = (req, res) => {
    Member.findByIdAndRemove(
        req.params.member_id,
        (error) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                routeProvider.generateSuccess(200, { message: 'Membre supprimé' }, res);
            }
        })
}