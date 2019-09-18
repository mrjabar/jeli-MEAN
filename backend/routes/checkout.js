const express = require('express');
const checkAuth = require('../middleware/check-auth');
const CheckoutController = require('../controllers/checkout');
const router = express.Router();

router.post('', checkAuth, CheckoutController.createCheckout);

module.exports = router;
