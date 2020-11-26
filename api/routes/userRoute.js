module.exports = (server) => {
    const userController = require('../controllers/userController');

    server.route('/schools/:school_id/users')
          .get(userController.list_all_users)
          .post(userController.create_an_user);

    server.route('/users/:user_id')
        .get(userController.get_an_user)
        .put(userController.update_an_user)
        .delete(userController.delete_an_user);
    
    server.route('/users/login').post(userController.login_an_user);
}
