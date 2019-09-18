const express = require('express');
const checkAuth = require('../middleware/check-auth');
const OrderController = require('../controllers/orders');
const router = express.Router();


router.get('', OrderController.getOrders);
router.get('/:id', checkAuth, OrderController.getOrder);
router.get('/:id', checkAuth, OrderController.deleteOrder);


module.exports = router;
