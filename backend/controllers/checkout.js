const Order = require('../models/order');

exports.createCheckout = (req, res, next) => {
  const order = new Order({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    addressOne: req.body.addressOne,
    addressTwo: req.body.addressTwo,
    country: req.body.country,
    items: req.body.items.map(item => item.id) || [],
    creator: req.appUserData.userId

  });
  order.save().then(rec => {
    res.status(201).json(rec);
  })
  .catch(error => {
      res.status(500).json({
        message: 'Creating an order failed'
      });
  });
}
