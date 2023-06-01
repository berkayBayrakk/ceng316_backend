const applyToBecomdeCandidate=require('../Controller/Candidate/applyToBecomaCandidateController');
const express=require('express');
const studentRoute=express.Router();
/**
 * @swagger
 *
 * /student/apply-become-candidate:
 *   post:
 *     tags: 
 *       - "Student"
 *     summary: "Apply to become candidate"
 *     description: Student applies to become candidate.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema: 
 *           type: object
 *           properties:
 *              studentId:
 *                type: integer
 *                example: 1
 *              electionId:
 *                type: integer
 *                example: 1
 *     responses:
 *       201:
 *         description: Candidate created.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */
studentRoute.post('/apply-become-candidate',applyToBecomdeCandidate);


module.exports=studentRoute;