const express=require('express');
const candidateRoute=express.Router();

const getCandidatesByElectionId=require('../Controller/Candidate/getCandidatesByElectionIdAndStatusController');
const applyToBecomdeCandidate=require('../Controller/Candidate/applyToBecomaCandidateController');

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/**
 * @swagger
 *
 * /candidate/?electionId={electionId}&status={status}:
 *   get:
 *     tags:
 *       - "Admin"
 *     summary: "Get candidates by election id and status"
 *     description: Admin gets candidates by election id and status.
 *     produces:
 *       - application/json
 *     parameters:
 *       - in : query
 *         name: electionId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Election ID
 *       - in : query
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *         description: Status
 *     responses:
 *       200:
 *         description: Get candidates.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Server error
 */
candidateRoute.get('/', getCandidatesByElectionId);


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
candidateRoute.post('/apply-become-candidate',upload.array('pdf'),applyToBecomdeCandidate);

module.exports=candidateRoute;
