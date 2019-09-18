const Order = require('../models/order');

exports.getOrders = (req, res, next) => {
  Order.find()
  .populate('items')
  .exec()
  .then(rec => {
    res.status(200).json(rec);
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching order failed!'
    });
  });
}


exports.getOrder = (req, res, next) => {
  Order.findById(req.params.id).then(order => {
    if (order) {
      res.status(200).json(order)
    } else {
      res.status(404).json({
        message: 'Order not found!'
      });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching order failed'
    });
  });
}

exports.deleteOrder =   (req, res, next) => {
  Order.deleteOne({_id: req.params.id}).then(result => {
    if (result.n > 0) {
      res.status(200).json({
        message: 'Deletion successful!'
      });
    } else {
      res.status(401).json({
        message: 'Not authorised!'
      });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Deleting course failed'
    });
  });
}

