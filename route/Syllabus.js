var express = require("express");
var Syallabus = require("../controller/Syllabus");
const path = require("path");
/**
 * @swagger
 * components:
 *   schemas:
 *     syallabusDto:
 *         type: object
 *         required:
 *           - Section
 *         properties:
 *           _id:
 *              type: string
 *              description: this is auto genereated id
 *           Section:
 *             type: string
 *             description: this Section name
 *         example:
 *           _id: dfs43gfsdghshdsj
 *           Section: kisan mahat
 */

/**
 * @swagger
 * tags:
 *   name: Syallabus
 *   description: syallabus managing api
 */

// /**
//  * @swagger
//  * /course:
//  *   get:
//  *     summary: Returns all courses
//  *     tags: [Course]
//  *     responses:
//  *       200:
//  *         description: this is the list of all courses
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/course'
//  */
/**
 * @swagger
 * /syallabus/{id}:
 *  get:
 *    summary: Use to request all syallabus by id
 *    tags: [Syallabus]
 *    parameters:
 *      - in: path 
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: this is for id
 *    responses:
 *       '200':
 *         description: A sucessfull response
 */

const router = express.Router();
router.get("/:id", Syallabus.getSyallabus);
/**
 * @swagger
 * /course/{id}/syallabus:
 *  post:
 *    summary: create new syallabus
 *    tags: [Syallabus]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/syallabusDto'
 *    responses:
 *        '201':
 *          description: A sucessfull response
 */
// router.post("/", Syallabus.PostSyallabus);
router.post('/:id', Syallabus.PostSyallabus)
// delete
// router.delete('/:id',Syallabus.DeleteSyallabus)

/**
 * @swagger
 * components:
 *   schemas:
 *     syallabusSectionDto:
 *         type: object
 *         required:
 *           - SubSection
 *         properties:
 *           _id:
 *              type: string
 *              description: this is auto genereated id
 *           SubSection:
 *             type: string
 *             description: this sub section name
 *           section_id:
 *             type: string
 *             description: this is section_id
 *         example:
 *           _id: dfs43gfsdghshdsj
 *           SubSection: kisan mahat
 */

/**
 * @swagger
 * /syallabus/subsection/{id}:
 *  post:
 *    summary: Use to request all syallabus subsection by id
 *    tags: [Syallabus]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/syallabusSectionDto'
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: this is for id
 *    responses:
 *       '200':
 *         description: A sucessfull response
 */


router.delete("/:id/:section_id", Syallabus.DeleteSection);
router.post("/subsection/:id", Syallabus.PostSubSection);
router.put("/:id/:section_id", Syallabus.UpdateSection);
router.delete("/:id/:section_id/:sub_id", Syallabus.deleteSubSection);
router.get("/:id/:section_id", Syallabus.getSingleSection)
// router.get("/subsection/:id/:section_id/:sub_id", Syallabus.getSingleSubSection)
module.exports = router;
