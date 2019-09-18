const Enquiry = require('../models/enquiry');

exports.createEnquiry = (req, res, next) => {
  const enquiry = new Enquiry({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    content: req.body.content,
  });
  enquiry.save().then(createdEnquiry => {
    res.status(201).json({
      message: 'Enquiry added successfully!',
      enquiry: {
        ...createdEnquiry,
        id: createdEnquiry._id
      }
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Creating a enquiry failed!'
    });
  });
}

exports.getEnquiries = (req, res, next) => {
  Enquiry.find().then(documents => {
    res.status(200).json({
      message: 'Enquiries fetched successfully',
      enquiries: documents
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching enquiries failed!'
    });
  });
}

exports.getEnquiry = (req, res, next) => {
  Enquiry.findById(req.params.id).then(enquiry => {
    if (enquiry) {
      res.status(200).json(enquiry);
    } else {
      res.status(404).json({ message: 'Enquiries not found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching enquiry failed!'
    });
  });
}

exports.deleteEnquiry = (req, res, next) => {
  Enquiry.deleteOne({_id: req.params.id}).then(result => {
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
      message: 'Deleting enquiry failed!'
    });
  });
}
