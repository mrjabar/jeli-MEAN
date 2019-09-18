const express = require('express');
const PostController = require('../controllers/posts');

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('', checkAuth, PostController.createPost);

router.put('/:id', checkAuth, PostController.updatePost);

router.get('', checkAuth, PostController.getPosts);

router.get('/:id', checkAuth, PostController.getPost);

router.delete('/:id', checkAuth, PostController.deletePost);

module.exports = router;
