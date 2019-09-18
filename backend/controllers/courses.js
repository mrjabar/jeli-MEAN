const Course = require('../models/course');

exports.createCourse = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const course = new Course({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    imagePath: url + '/images/' + req.file.filename,
    creator: req.appUserData.userId
  });
  course.save().then(createdCourse => {
    res.status(201).json({
      message: 'Course added successfully!',
      course: {
        ...createdCourse,
        id: createdCourse._id
      }
    });
  }).catch(error => {
      res.status(500).json({
        message: 'Creating a course failed'
      });
  });
}

exports.updateCourse =   (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    imagePath = url + '/images/' + req.file.filename
  };
  const course = new Course({
    _id: req.body.id,
    name: req.body.name,
    dscription: req.body.dscription,
    category: req.bo.category,
    price: req.body.price,
    imagePath: imagePath,
    creator: req.appUserData.userId
  });
  Course.updateOne({ _id: req.params.id, creator: req.appUserData.userId}, course).then(result => {
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
      message: 'Couldn\'t update Course'
    })
  });
}

exports.getCourses = (req, res, next) => {
  Course.find().then(documents => {
    res.status(200).json({
      message: 'Courses fetched successfully',
      courses: documents
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching courses failed'
    });
  });
}

exports.getCourse = (req, res, next) => {
  Course.findById(req.params.id).then(course => {
    if (course) {
      res.status(200).json(course)
    } else {
      res.status(404).json({
        message: 'Course not found!'
      });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching course failed'
    });
  });
}

exports.deleteCourse =   (req, res, next) => {
  Course.deleteOne({_id: req.params.id, creator: req.appUserData.userId}).then(result => {
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
