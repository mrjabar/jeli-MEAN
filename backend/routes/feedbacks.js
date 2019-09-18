const express = require('express');
const checkAuth = require('../middleware/check-auth');
const FeedbacksController = require('../controllers/feedbacks');
const router = express.Router();

router.post('', checkAuth, FeedbacksController.createFeedback);

router.put('/:id', checkAuth, FeedbacksController.updateFeedback);

router.get('', FeedbacksController.getFeedbacks);

router.get('/:id', FeedbacksController.getFeedback);

router.delete('/:id', checkAuth, FeedbacksController.deleteFeedback);

module.exports = router;
