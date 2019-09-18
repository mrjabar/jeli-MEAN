const Message = require('../models/message');

exports.createMessages = (req, res, next) => {
  const message = new Message({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    message: req.body.message,
    user: req.appUserData.userId
    // user: 'user'
  })
  message.save().then(createdMessage => {
    res.status(201).json({
      message: 'Message created successfully',
      message: {
        ...createdMessage,
        id: createdMessage._id
      }
    })
    // if (createdMessage) {
    //   res.send(createdMessage)
    // } else {
    //   res.send([])
    // }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Creating a message failed!'
    });
  });
}

exports.getMessage = (req, res, next) => {
  Message.find().then(rec => {
    if (rec) {
      res.send(rec)
    } else {
      res.send([])
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching message failed!'
    });
  });
}

// exports.deletePost = (req, res, next) => {
//   Post.deleteOne({_id: req.params.id, creator: req.appUserData.userId}).then(result => {
//     if (result.n > 0) {
//       res.status(200).json({
//         message: 'Updated successful!'
//       });
//     } else {
//       res.status(401).json({
//         message: 'Not authorised!'
//       });
//     }
//   })
//   .catch(error => {
//     res.status(500).json({
//       message: 'Deleting post failed!'
//     });
//   });
// }
