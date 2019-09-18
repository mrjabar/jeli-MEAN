const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user');

exports.registerUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      contact: req.body.contact,
      username: req.body.username,
      password: hash
    });
    if (req.body.adminCode === 'secret123') {
      user.isAdmin = true;
    }
    user.save()
      .then(result => {
        res.status(201).json({
          message: "Registration successful!",
          result: result
      });
    })
    .catch(err => {
      res.status(500).json({
          message: 'Email or username already registered in our database. Please choose a different one!'
      });
    });
  });
}

exports.userLogin = (req, res, next) => {
let fetchedUser;
User.findOne({ email: req.body.email})
  .then(user => {
    if (!user) {
      return res.status(401).json({
        message: 'No user found!'
      });
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  })
  .then(result => {
    if (!result) {
      return res.status(500).json({
        message: 'Either your email or password is incorrect.'
      });
    }
    const token = jwt.sign(
      {
        fullName: fetchedUser.fullName,
        email: fetchedUser.email,
        username: fetchedUser.username,
        userId: fetchedUser._id,
        contact: fetchedUser.contact,
        isAdmin: fetchedUser.isAdmin
      },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: fetchedUser._id,
      email: fetchedUser.email,
      username: fetchedUser.username,
      isAdmin: fetchedUser.isAdmin,
      fullName: fetchedUser.fullName,
      contact: fetchedUser.contact,
      isAdmin: fetchedUser.isAdmin

    });
  })
  .catch(err => {
    return res.status(500).json({
      message: 'Either your email or password is incorrect.'
    });
  });
}

exports.updateUser = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    imagePath = url + '/images/' + req.file.filename
  };
  const user = new User({
    _id: req.body.id,
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    contact: req.body.contact,
    imagePath: imagePath,
  });
  User.updateOne({ _id: req.params.id}, user).then(result => {
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

// Create user profile here

exports.userProfile = (req, res, next) => {
  User.findOne({_id: req._id}).then(user => {
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({
        message: 'User not found!'
      });
    }
  });
}

// End create user profile

exports.createUsers = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const user = new User({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    contact: req.body.contact,
    imagePath: url + '/images/' + req.file.filename
  });
  user
    .save()
    .then(createdUser => {
      res.status(201).json({
        message: "User added successfully!",
        user: {
          ...createdUser,
          id: createdUser._id
        }
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Creating a user failed'
    });
  });
}

exports.getUsers = (req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: 'Users fetched successfully',
      users: documents
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Fetching users failed'
    });
  });
}

exports.getUser = (req, res, next) => {
  User.findById(req.params.id).then(user => {
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({
        message: 'User not found!'
      });
    }
  });
}

exports.deleteUser = (req, res, next) => {
  User.deleteOne({_id: req.params.id}).then(result => {
    if (result.n > 0) {
      res.status(200).json({
        message: 'Deletion successful!'
      });
    } else {
      res.status(401).json({
        message: 'Not authorised!'
      });
    }
  });
}


