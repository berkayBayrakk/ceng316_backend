const express=require('express');
const studentRoute=express.Router();

const getActiveElectionsDepartment=require('../Controller/Election/GetActiveElectionsByDepartment')
const getStudentsHandler=require('../Controller/Student/GetStudentController');

/**
 * @swagger
 *
 * /student:
 *   get:
 *     tags:
 *       - "Admin"
 *     summary: "Get all students"
 *     description: Admin gets all students.
 *     produces:
 *       - application/json
 *    
 *     responses:
 *       200:
 *         description: Get all students.
 *       500:
 *         description: Server error
 */
studentRoute.get('/',getStudentsHandler);

/**
 * @swagger
 *
 * /student/active-election-department/{id}:
 *   get:
 *     tags: 
 *       - "Student"
 *     summary: "Get active elections by department id"
 *     description: Get active elections by department id.
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: integer
 *              minimum: 1
 *            description: Department ID
 *     responses:
 *       200:
 *         description: Get elections.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */
studentRoute.get('/active-election-department/:id',getActiveElectionsDepartment)

module.exports=studentRoute;