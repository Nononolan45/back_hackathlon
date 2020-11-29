const School = require('../models/schoolModel');
const Project = require('../models/projectModel');
const Member = require('../models/memberModel');


const routeProvider = require('../providers/route');


exports.list_all_projects = (req, res) => {
    Project.find(
        { school_id: req.params.school_id },
        (error, schools) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                routeProvider.generateSuccess(200, schools, res);
            }
        });
}

exports.list_all_projects_always_available = (req, res) => {
    Project.find(
        { school_id: req.params.school_id },
        (error, projects) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                let projectsFilter = [];
                if (projects.length > 0) {
                    let i = 0;
                    projects.forEach((project) => {
                        Member.find(
                            { project_id: project.id },
                            (error, members) => {
                                i++;
                                if (error) {
                                    routeProvider.generateError(500, 'Erreur serveur', res);
                                }
                                else if (members.length != 5) {
                                    projectsFilter.push(project);
                                    if (i === projects.length) {
                                        routeProvider.generateSuccess(200, projectsFilter, res);

                                    }
                                }
                            });
                    });
                } else {
                    routeProvider.generateSuccess(200, [], res);

                }


            }
        });
}


exports.create_a_project = (req, res) => {
    School.findById(
        req.params.school_id,
        (error) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                let new_project = new Project(
                    {
                        school_id: req.params.school_id,
                        ...req.body
                    }
                );
                new_project.save((error, project) => {
                    if (error) {
                        routeProvider.generateError(500, 'Erreur serveur', res);
                    }
                    else {
                        routeProvider.generateSuccess(201, project, res);
                    }
                });
            }
        });


}

exports.get_a_project = (req, res) => {
    Project.findById(
        req.params.project_id,
        (error, project) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                routeProvider.generateSuccess(200, project, res);
            }
        });
}

exports.update_a_project = (req, res) => {
    Project.findByIdAndUpdate(
        req.params.project_id,
        req.body,
        {
            new: true,
            useFindAndModify: false
        },
        (error, project) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                routeProvider.generateSuccess(200, project, res);
            }
        });
}

exports.delete_a_project = (req, res) => {
    Project.findByIdAndRemove(
        req.params.project_id,
        (error) => {
            if (error) {
                routeProvider.generateError(500, 'Erreur serveur', res);
            }
            else {
                routeProvider.generateSuccess(200, { message: 'Projet supprimé' }, res);
            }
        })
}