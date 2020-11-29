module.exports = (server) => {
    const memberController = require('../controllers/memberController');
    const memberMiddleware = require('../middleware/memberMiddleware');
    const projectMiddleware = require('../middleware/projectMiddleware');
    const jwtMiddleware = require('../middleware/jwtMiddleware');


    // generate all route for CRUD member
    server.route('/members/:member_id')
        .get(memberController.get_a_member)
        .put(memberController.update_a_member)
        .delete(memberController.delete_a_member);

    server.route('/projects/:project_id/members')
        .get(jwtMiddleware.verify_token, projectMiddleware.verifyUsserIsAttachedToSchool, memberController.list_all_members)
        .post(memberMiddleware.verifyNumberByProject, memberController.create_a_member);

}

