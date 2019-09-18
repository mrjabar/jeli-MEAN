const express = require('express');
const MessageController = require('../controllers/messages');

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('', checkAuth, MessageController.createMessages);

router.get('/:id', MessageController.getMessage);

// router.delete('/:id', checkAuth, PostController.deletePost);

module.exports = router;
