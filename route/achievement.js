var express = require("express");
var Achievement = require("../controller/achievement");
const path = require("path");
const multer = require("multer");
const uploadImage = require("../service/firebase")
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     achievementDTO:
 *         type: object
 *         required:
 *           - title
 *         properties:
 *           _id:
 *              type: string
 *              description: this is auto genereated id
 *           title:
 *             type: string
 *             description: this is title
 *           source:
 *             type: string
 *             description: this is source of certificate
 *           file:
 *             type: file
 *             descrption: this is image
 *           date:
 *             type: date
 *             description: this is date
 */

/**
 * @swagger
 * tags:
 *   name: Achievement
 *   description: Achievement managing api
 */

/**
 * @swagger
 * /achievement:
 *  get:
 *     summary: Use to request all Achievement
 *     tags: [Achievement]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */

router.get("/", Achievement.getachievement);
router.get("/:id", Achievement.getSingleachievement);
/**
 * @swagger
 * /achievement/files:
 *  post:
 *    summary: create new achievements
 *    tags: [Achievement]
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/achievementDTO'
 *    responses:
 *        '201':
 *          description: A sucessfull response
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: multer.memoryStorage(), });
router.post(
    "/files",
    upload.any("file"), uploadImage,
    Achievement.Postachievement
);
router.post("/files/:id", upload.any("files"), uploadImage, Achievement.Postachievement)
// delete

router.delete("/:id", Achievement.DeleteAchievement);
// update
router.put(
    "/files/:id",
    upload.any("file"), uploadImage,
    Achievement.updateachievement

);

module.exports = router;
