const ContactUs = require('../models/contactus');

exports.createContactUs = (req, res, next) => {
  const contactus = new ContactUs({
    title: req.body.title,
    content: req.body.content
  });
  contactus
    .save()
    .then(createdContactus => {
      res.status(201).json({
        message: 'Contactus added successfully!',
        post: {
          ...createdContactus,
          id: createdContactus._id
        }
      }
    );
  })
  .catch(error => {
    res.status(500).json({
      message: 'Creating a contactus failed!'
    });
  });
}

exports.getContactsUs = (req, res, next) => {
  ContactUs.find().then(documents => {
    res.status(200).json({
      message: 'ContactsUs fetched successfully',
      contactsus: documents
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching contactsus failed!'
    });
  });
}

exports.getContactUs = (req, res, next) => {
  ContactUs.findById(req.params.id).then(contactus => {
    if (contactus) {
      res.status(200).json(contactus);
    } else {
      res.status(404).json({ message: 'Contactus not found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching contactus failed!'
    });
  });
}

exports.deleteContactUs = (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
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
      message: 'Deleting contactus failed!'
    });
  });
}
