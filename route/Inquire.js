var express = require("express");
var Inquire = require("../controller/Inquires");
const path = require("path");
const multer = require("multer");
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     inquireDto:
 *         type: object
 *         required:
 *           - name
 *         properties:
 *           _id:
 *              type: string
 *              description: this is auto genereated id
 *           name:
 *             type: string
 *             description: this  name
 *           email:
 *             type: string
 *             description: this is email
 *           phone:
 *             type: string
 *             descrption: this is phone 
 *           course:
 *             type: string
 *             description: this is course
 *           description:
 *             type: string
 *             description: this is description
 */

/**
 * @swagger
 * tags:
 *   name: Inquire
 *   description: Inquire managing api
 */

/**
 * @swagger
 * /inquire:
 *  get:
 *     summary: Use to request all inquire
 *     tags: [Inquire]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */
/**
 * @swagger
 * /inquire:
 *  post:
 *    summary: create new inquires
 *    tags: [Inquire]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/inquireDto'
 *    responses:
 *        '201':
 *          description: A sucessfull response
 */
router.get("/", Inquire.getInquire);
router.get("/:id", Inquire.getEnquire)
router.post("/", Inquire.PostInquire);
router.delete("/:id", Inquire.DeleteInquire);
router.put('/:id', Inquire.updateInquire);
module.exports = router;
