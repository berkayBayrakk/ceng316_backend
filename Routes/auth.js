const {loginHandler}=require('../Controller/StudentController');
const express=require('express');

const authRoute=express.Router();
/**
 * @swagger
 *
 * /auth/login:
 *   post:
 *     tags: 
 *       - "User"
 *     summary: "Log In to IOES"
 *     description: User logs in IOES
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: string
 *         name: email
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *       - in: string
 *         name: password
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         
 *     responses:
 *       200:
 *         description: User has been logged in.
 *       400:
 *         description: Missing parameters.
 *       401:
 *         description: Wrong password.
 *       500:
 *         description: Server error.
 */
authRoute.post('/login',loginHandler);


module.exports=authRoute;