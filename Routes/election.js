const express=require('express');
const electionRoute=express.Router();

const getElections=require('../Controller/Election/GetElectionController');
const getElection=require('../Controller/Election/GetElectionByIdController');
const getActiveElections=require('../Controller/Election/GetActiveElectionsController');
const getFinishedElections=require('../Controller/Election/GetFinishedElectionsController');
const getNotFinishedElections=require('../Controller/Election/GetNotStartedElectionsController');
const abortElection=require('../Controller/Election/AbortElectionController');

const announceElectionDate=require('../Controller/Election/AnnounceElectionDateController');


/**
 * @swagger
 *
 * /election:
 *   get:
 *     tags:
 *       - "Admin" 
 *     summary: "Get all elections"
 *     description: Admin gets all elections.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Get all elections.
 *       500:
 *         description: Server error
 */
electionRoute.get('/',getElections);

/**
 * @swagger
 *
 * /election/election-active:
 *   get:
 *     tags:
 *       - "Admin"
 *     summary: "Get all active elections"
 *     description: Admin gets all active elections.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Get all active elections.
 *       500:
 *         description: Server error
 */
electionRoute.get('/election-active',getActiveElections);

/**
 * @swagger
 *
 * /election/election-finished:
 *   get:
 *     tags:
 *       - "Admin"
 *     summary: "Get all finished elections"
 *     description: Admin gets all finished elections.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Get all finished elections.
 *       500:
 *         description: Server error
 */
electionRoute.get('/election-finished',getFinishedElections);


/**
 * @swagger
 *
 * /election/election-not-started:
 *   get:
 *     tags:
 *       - "Admin"
 *     summary: "Get all not started elections"
 *     description: Admin gets all not started elections.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Get all finished elections.
 *       500:
 *         description: Server error
 */
electionRoute.get('/election-not-started',getNotFinishedElections);

/**
 * @swagger
 *
 * /election/announce-election-date:
 *   post:
 *     tags: 
 *       - "Admin"
 *     summary: "Announce election date"
 *     description: Admin announces election date. Date format yyyy-mm-dd
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema: 
 *           type: object
 *           properties:
 *              startDate:
 *                type: date
 *                example: 2000-01-01
 *              endDate:
 *                type: date
 *                example: 2001-01-01
 *              departmentId:
 *                type: integer
 *                example: 1
 *     responses:
 *       201:
 *         description: Election created.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */
electionRoute.post('/announce-election-date',announceElectionDate);

/**
 * @swagger
 *
 * /election/{id}:
 *   get:
 *     tags:
 *       - "Admin"
 *       - "Student"
 *     summary: "Get election by id"
 *     description: Admin gets election.
 *     produces:
 *       - application/json
 *     parameters:
 *       - in : path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Election ID
 *     responses:
 *       200:
 *         description: Get specified election.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Server error
 */
electionRoute.get('/:id',getElection);

/**
 * @swagger
 *
 * /election/{id}:
 *   delete:
 *     tags:
 *       - "Admin"
 *     summary: "Delete election by id"
 *     description: Admin deletes election.
 *     produces:
 *       - application/json
 *     parameters:
 *       - in : path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Election ID
 *     responses:
 *       204:
 *         description: Delete specified election.
 *       404:
 *         description: Not found.
 *       500:
 *         description: Server error
 */
electionRoute.delete('/:id',abortElection);

module.exports=electionRoute;
