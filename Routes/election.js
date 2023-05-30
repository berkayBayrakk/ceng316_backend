const express=require('express');
const electionRoute=express.Router();

const getElections=require('../Controller/Election/GetElectionController');
const getElection=require('../Controller/Election/GetElectionByIdController');
const getActiveElections=require('../Controller/Election/GetActiveElectionsController');
const getFinishedElections=require('../Controller/Election/GetFinishedElectionsController');

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
 * /election/{id}:
 *   get:
 *     tags:
 *       - "Admin"
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
 * /election-active:
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
 * /election-finished:
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
 * /election-not-started:
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
electionRoute.get('/election-not-started',getFinishedElections);

module.exports=electionRoute;
