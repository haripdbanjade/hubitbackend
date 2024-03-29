var express = require("express");
var Instructor = require("../controller/instructor");
const path = require("path");
const multer = require("multer");
// const uuid = require("uuid/v4");
const uploadImage = require("../service/firebase")
const router = express.Router();
// var mongoose = require("mongoose");
// const MyModel = require('../modal/Course')
/**
 * @swagger
 * tags:
 *   name: onzlineformroute
 *   description: onlineform manageing api
 */

/**
 * @swagger
 * /instructor:
 *   get:
 *     summary: Returns all form contents
 *     tags: [onlineform]
 *     responses:
 *        '200':
 *          description: A successful Response
 */

router.get("/", Instructor.getInstructor);
// router.get("/:id", Instructor.getSingleInstructor);
router.get("/:courseId", Instructor.getSingleInstructorFromCourse);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: multer.memoryStorage(), });
router.post(
    "/files",
    upload.any("file"), uploadImage,
    Instructor.PostInstructor
    // Course.PostCourse
);
// router.post("/files/", upload.single("file"), Instructor.PostInstructor)
// delete

router.delete("/:id", Instructor.DeleteInstructor);
// update
router.put(
    "/files/:id",
    upload.single("file"), uploadImage,
    Instructor.updateInstructor

);

module.exports = router;
