const express = require('express');
const UserController = require('../controllers/user');
const extractFile = require('../middleware/file');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

// const MIME_TYPE_MAP = {
//   'image/png': 'png',
//   'image/jpeg': 'jpg',
//   'image/jpg': 'jpg'
// }


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const isValid = MIME_TYPE_MAP[file.mimetype];
//     let error = new Error('Invalid mime type');
//     if (isValid) {
//       error = null;
//     }
//     cb(error, 'backend/images');
//   },
//   filename: (req, file, cb) => {
//     const name = file.originalname.toLowerCase().split(' ').join('-');
//     const ext = MIME_TYPE_MAP[file.mimetype];
//     cb(null, name + '-' + Date.now() + '.' + ext);
//   }
// });

router.post('/register', UserController.registerUser);

router.post('/login', UserController.userLogin);

router.post('', extractFile, UserController.getUsers);

router.put('/:id', checkAuth, extractFile, UserController.updateUser);

router.get('', checkAuth, UserController.getUsers);

router.get('/:id', checkAuth, UserController.getUser);

router.delete('/:id', checkAuth, UserController.deleteUser);


module.exports = router;
