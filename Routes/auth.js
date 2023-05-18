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
 *       - email: email
 *         description: User's email.
 *         in: formData
 *         required: true
 *         type: string
 *       - password: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User has been logged in.
 *       400:
 *         description: Missing parameters
 */
authRoute.post('/login',loginHandler);


module.exports=authRoute;