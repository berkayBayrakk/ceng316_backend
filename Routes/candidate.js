const express=require('express');
const electionRoute=express.Router();

const getCandidatesByElectionId=require('../Controller/Candidate/getCandidatesByElectionIdAndStatusController');


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
electionRoute.get('/', getCandidatesByElectionId);

module.exports=electionRoute;
