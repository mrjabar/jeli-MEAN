const express = require('express');
const ContactUsController = require('../controllers/contactsus');

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('', checkAuth, ContactUsController.createContactUs);

router.get('', ContactUsController.getContactsUs);

router.get('/:id', checkAuth, ContactUsController.getContactUs);

router.delete('/:id', checkAuth, ContactUsController.deleteContactUs);

module.exports = router;
