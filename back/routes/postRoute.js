module.exports = (server) => {
    const postController = require('../controllers/postController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');


    server.route('/posts')
        .get(postController.list_all_posts)
        .post(jwtMiddleware.verify_token, postController.create_a_post);

    server.route('/posts/:post_id')
        .get(postController.get_a_post)
        .put(postController.update_a_post)
        .delete(postController.delete_a_post);
}

