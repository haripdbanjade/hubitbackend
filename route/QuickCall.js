var express = require("express");
var QuickCall = require("../controller/QuickCalls");
// const path = require("path");
// const multer = require("multer");
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     quickcallDto:
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
 *           phone:
 *             type: string
 *             description: this is phone
 */

/**
 * @swagger
 * tags:
 *   name: Quickcall
 *   description: Quickcall managing api
 */

/**
 * @swagger
 * /quickcall:
 *  get:
 *     summary: Use to request all quickcall
 *     tags: [QuickCall]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */
/**
 * @swagger
 * /quickcall:
 *  post:
 *    summary: create new quickcalls
 *    tags: [Quickcall]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/quickcallDto'
 *    responses:
 *        '201':
 *          description: A sucessfull response
 */
router.get("/", QuickCall.getQuickCall);
router.get("/:id", QuickCall.getQuick)
router.post("/", QuickCall.PostQuickCall);

router.delete("/:id", QuickCall.DeleteQuickCall);
router.put('/:id', QuickCall.updateQuickCall);
module.exports = router;