const express = require("express");
const Category = require("../controller/Category");
const multer = require("multer")
const uploadImage = require("../service/firebase")
/**
 * @swagger
 * components:
 *   schemas:
 *     categoryDto:
 *         type: object
 *         properties:
 *           _id:
 *              type: string
 *              description: this is auto genereated id
 *           category_name:
 *             type: string
 *             description: this category name
 *           color:
 *             type: string
 *             description: this is category color
 *           file:
 *             type: file
 *         example:
 *           _id: dfs43gfsdghshdsj
 *           category_name: kisan mahat
 *           color: '#ffffff'
 *           image: dsndsnfndsds
 */

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: course Category managing api
 */

// /**
//  * @swagger
//  * /category:
//  *   get:
//  *     summary: Returns all category
//  *     tags: [Course]
//  *     responses:
//  *       200:
//  *         description: this is the list of all category
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/categoryDto'
//  */
/**
 * @swagger
 * /category:
 *  get:
 *     summary: Use to request all category
 *     tags: [Category]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */
const router = express.Router();
router.get("/", Category.getCategory);
router.get("/:id", Category.getCategorys)
/**
 * @swagger
 * /category/files:
 *  post:
 *    summary: create new category
 *    tags: [Category]
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/categoryDto'
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
    Category.PostCategory
    // Course.PostCourse
);
router.put("/files", upload.any("file"), uploadImage, Category.updateCategory)
router.delete("/:id", Category.DeleteCategory)
// router.post("/", Category.PostCategory);
module.exports = router;
