const Feedback = require('../models/feedback');

exports.createFeedback = (req, res, next) => {
  const feedback = new Feedback({
    title: req.body.title,
    content: req.body.content,
    creator: req.appUserData.userId
  });
  feedback.save().then(createdfeedback => {
    res.status(201).json({
      message: 'Post added successfully!',
      feedback: {
        ...createdfeedback,
        id: createdfeedback._id
      }
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Creating a feedback failed!'
    });
  });
}

exports.updateFeedback = (req, res, next) => {
  const feedback = new Feedback({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    // comments: req.body.comments,
    // date: req.body.date
    creator: req.appUserData.userId
  })
  Post.updateOne({ _id: req.params.id, creator: req.appUserData.userId }, feedback)
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({
          message: 'Updated successful!'
        });
      } else {
        res.status(401).json({
          message: 'Not authorised!'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Feedback not updated!'
    });
  });
}

exports.getFeedbacks = (req, res, next) => {
  Feedback.find().then(documents => {
    res.status(200).json({
      message: 'Feedback fetched successfully',
      feedbacks: documents
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching feedbacks failed!'
    });
  });
}

exports.getFeedback = (req, res, next) => {
  Feedback.findById(req.params.id).then(feedback => {
    if (feedback) {
      res.status(200).json(feedback);
    } else {
      res.status(404).json({ message: 'Feedbacks not found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching feedback failed!'
    });
  });
}

exports.deleteFeedback = (req, res, next) => {
  Feedback.deleteOne({_id: req.params.id, creator: req.appUserData.userId}).then(result => {
    if (result.n > 0) {
      res.status(200).json({
        message: 'Updated successful!'
      });
    } else {
      res.status(401).json({
        message: 'Not authorised!'
      });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Deleting feedback failed!'
    });
  });
}
