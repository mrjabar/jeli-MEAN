const express = require('express');
const checkAuth = require('../middleware/check-auth');
const EnquiriesController = require('../controllers/enquiry');
const router = express.Router();

router.post('', EnquiriesController.createEnquiry);

router.get('', EnquiriesController.getEnquiries);

router.get('/:id', checkAuth, EnquiriesController.getEnquiry);

router.delete('/:id', checkAuth, EnquiriesController.deleteEnquiry);

module.exports = router;
