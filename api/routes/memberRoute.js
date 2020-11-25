module.exports = (server) => {
    const memberController = require('../controllers/memberController');
    const memberMiddleware = require('../middleware/memberMiddleware');


    server.route('/members/:member_id')
        .get(memberController.get_a_member)
        .put(memberController.update_a_member)
        .delete(memberController.delete_a_member);

    server.route('/projects/:project_id/members')
        .get(memberController.list_all_members)
        .post(memberMiddleware.verifyNumberByProject, memberController.create_a_member);

}

