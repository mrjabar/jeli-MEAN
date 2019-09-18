const express = require('express');
const CourseController = require('../controllers/courses');
const checkAuth = require('../middleware/check-auth');
const checkAdmin = require('../middleware/check-admin');
const extractFile = require('../middleware/file');
const router = express.Router();


router.post('', checkAuth, extractFile, CourseController.createCourse);

router.put('/:id', checkAuth, checkAdmin, extractFile, CourseController.updateCourse);

router.get('', CourseController.getCourses);

router.get('/:id', CourseController.getCourse);

router.delete('/:id', checkAuth, CourseController.deleteCourse);

module.exports = router;
