module.exports = (server) => {
    const projectController = require('../controllers/projectController');
    const projectMiddleware = require('../middleware/projectMiddleware');
    const jwtMiddleware = require('../middleware/jwtMiddleware')


    // generate all route for CRUD project


    server.route('/schools/:school_id/projects')
        .get(projectController.list_all_projects)
        .post(projectController.create_a_project);

    server.route('/schools/:school_id/projects_available')
        .get(projectController.list_all_projects_always_available)


    server.route('/projects/:project_id')
        .get(jwtMiddleware.verify_token, projectMiddleware.verifyUsserIsAttachedToSchool, projectController.get_a_project)
        .put(projectController.update_a_project)
        .delete(projectController.delete_a_project);

}

